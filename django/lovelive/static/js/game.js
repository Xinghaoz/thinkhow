'use strict';
/*
* Tiny game engine.
*/

// requestAnimationFrame polyfill
if (!Date.now)
Date.now = function() { return new Date().getTime(); };
(function() {
    'use strict';
    var vendors = ['webkit', 'moz'];
    for (var i = 0; i < vendors.length && !window.requestAnimationFrame; ++i) {
        var vp = vendors[i];
        window.requestAnimationFrame = window[vp+'RequestAnimationFrame'];
        window.cancelAnimationFrame = (window[vp+'CancelAnimationFrame'] || window[vp+'CancelRequestAnimationFrame']);
    }
    if (/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent) // iOS6 is buggy
    || !window.requestAnimationFrame || !window.cancelAnimationFrame) {
        var lastTime = 0;
        window.requestAnimationFrame = function(callback) {
            var now = Date.now();
            var nextTime = Math.max(lastTime + 16, now);
            return setTimeout(function() { callback(lastTime = nextTime); },
            nextTime - now);
        };
        window.cancelAnimationFrame = clearTimeout;
    }
}());

function Game(id,params){
    var _ = this;
    params = params||{};
    var settings = {
        width:1400,						// Canvas width
        height:750,						// Canvas height
        names:[],
        cashes:[],
        deposits:[],
    };
    var _extend = function(target,settings,params){
        for(var i in settings){
            target[i] = params[i]||settings[i];
        }
        return target;
    };
    _extend(this,settings,params);
    var $canvas = document.getElementById(id);
    $canvas.width = _.width;
    $canvas.height = _.height;
    var _context = $canvas.getContext('2d');	// Canvas context
    var _stages = [];
    var _events = {};
    var _index=0,								// The current stage
    _hander;  								// Frame control

    // Define general object.
    var Item = function(params){
        this._params = params||{};
        this._settings = {
            x:0,					//postion coordinate: X-label
            y:0,					//postion coordinate: Y-label
            width:20,				//Width
            height:20,				//Height
            type:0,					//object's type:
                                    //0:common object (dosen't bound with maps)
                                    //1:object controlled by player
                                    //2:object controlled by program
            color:'#F00',			//labled color
            status:1,				//object's stauts:
                                    //0:inactive/terminated
                                    //1:active
                                    //2:paused
                                    //3:temporary
                                    //4:abnorm
            orientation:0,			//current direction:
                                    //0:right 1:down 2:left 3:up
            speed:0,				//moving speed
            // Customize.
            name:'',
            steps:0,
            token:0,
            color:'',
            cash:50000,
            deposit:0,
            imageIndex:[0, 0],
            stayDays:0,
            //variables about maps
            location:null,			//locating maps
            coord:null,				//whether objects are bound with maps
            path:[],				//NPCs' fixed walking path
            vector:null,			//obejective coordinate
            //variables about stage
            stage:null,				//bounding objects with conresponding stage
            index:0,				//indexing objects
            frames:1,				//speed degree: variation frequence of inner calculator
            times:0,				//refreshing times(juding circular GIF status)
            timeout:0,				//count-down(judging process GIF status)
            control:{},				//control cache(functions when reach certain position)
            update:function(){}, 	//update variables
            draw:function(){}		//draw stage
        };
        _extend(this,this._settings,this._params);
    };
    Item.prototype.bind = function(eventType,callback){
        if(!_events[eventType]){
            _events[eventType] = {};
            $canvas.addEventListener(eventType,function(e){
                var position = _.getPosition(e);
                _stages[_index].items.forEach(function(item){
                    if(Math.abs(position.x-item.x)<item.width/2&&Math.abs(position.y-item.y)<item.height/2){
                        var key = 's'+_index+'i'+item.index;
                        if(_events[eventType][key]){
                            _events[eventType][key](e);
                        }
                    }
                });
                e.preventDefault();
            });
        }
        _events[eventType]['s'+this.stage.index+'i'+this.index] = callback.bind(this);  //绑定作用域
    };
    //constructing maps
    var Map = function(params){
        this._params = params||{};
        this._settings = {
            x:0,						//start postion
            y:0,
            size:24,					//map-unit width: Can not be odd!
            data:[],					//map data
            stage:null,					//stage
            x_length:0,					//map width
            y_length:0,					//map height
            frames:1,					//speed degree: variation frequence of inner calculator
            times:0,					//refreshing times(juding circular GIF status)
            cache:false,    			//whether map is static(true) or not(false)
            // Customize:
            prices:[],
            update:function(){},		//update map's variables
            draw:function(){},			//draw maps
        };
        _extend(this,this._settings,this._params);
    };
    //pick coordinate values of certain postion
    Map.prototype.get = function(x,y){
        if(this.data[y]&&typeof this.data[y][x]!='undefined'){
            return this.data[y][x];
        }
        return -1;
    };
    //set coordinate values of certain postion
    Map.prototype.set = function(x,y,value){
        if(this.data[y]){
            this.data[y][x] = value;
        }
    };
    //alter map-coordinate to canvas-postion
    Map.prototype.coord2position = function(cx,cy){
        return {
            x:this.x+cx*this.size+this.size/2,
            y:this.y+cy*this.size+this.size/2
        };
    };
    //alter canvas-postion to map-coordinate
    Map.prototype.position2coord = function(x,y){
        var fx = Math.abs(x-this.x)%this.size-this.size/2;
        var fy = Math.abs(y-this.y)%this.size-this.size/2;
        // console.log("x = " + x + ", y = " + y + ", this.x = " + this.x + ", this.y = " + this.y + ", this.size ＝ " + this.size);
        return {
            x:Math.floor((x-this.x)/this.size),
            y:Math.floor((y-this.y)/this.size),
            offset:Math.sqrt(fx*fx+fy*fy)
        };
    };
    //find certain postion
    Map.prototype.finder = function(params){
        var defaults = {
            map:null,
            start:{},
            end:{},
            type:'path'
        };
        var options = _extend({},defaults,params);
        if(options.map[options.start.y][options.start.x]||options.map[options.end.y][options.end.x]){ //uncorrect start/end postion
            return [];
        }
        var finded = false;
        var result = [];
        var y_length  = options.map.length;
        var x_length = options.map[0].length;
        var steps = [];
        for(var y=y_length;y--;){
            steps[y] = [];
            for(var x=x_length;x--;){
                steps[y][x] = 0;
            }
        }
        var _getValue = function(x,y){  //get values of certain position in map
            if(options.map[y]&&typeof options.map[y][x]!='undefined'){
                return options.map[y][x];
            }
            return -1;
        };
        var _next = function(to){ //whether next step can be taken, push into list if feasible
            var value = _getValue(to.x,to.y);
            if(value<1){
                if(value==-1){
                    to.x = (to.x+x_length)%x_length;
                    to.y = (to.y+y_length)%y_length;
                    to.change = 1;
                }
                if(!steps[to.y][to.x]){
                    result.push(to);
                }
            }
        };
        var _render = function(list){//find path
            var new_list = [];
            var next = function(from,to){
                var value = _getValue(to.x,to.y);
                if(value<1){	//whether current spot is feasible
                    if(value==-1){
                        to.x = (to.x+x_length)%x_length;
                        to.y = (to.y+y_length)%y_length;
                        to.change = 1;
                    }
                    if(to.x==options.end.x&&to.y==options.end.y){
                        steps[to.y][to.x] = from;
                        finded = true;
                    }else if(!steps[to.y][to.x]){
                        steps[to.y][to.x] = from;
                        new_list.push(to);
                    }
                }
            };
            list.forEach(function(current){
				next(current,{y:current.y+1,x:current.x});
                next(current,{y:current.y,x:current.x+1});
                next(current,{y:current.y-1,x:current.x});
                next(current,{y:current.y,x:current.x-1});
            });
            if(!finded&&new_list.length){
                _render(new_list);
            }
        };
        _render([options.start]);
        if(finded){
            var current=options.end;
            if(options.type=='path'){
                while(current.x!=options.start.x||current.y!=options.start.y){
                    result.unshift(current);
                    current=steps[current.y][current.x];
                }
            }else if(options.type=='next'){
                _next({x:current.x+1,y:current.y});
                _next({x:current.x,y:current.y+1});
                _next({x:current.x-1,y:current.y});
                _next({x:current.x,y:current.y-1});
            }
        }
        return result;
    };
    //constructing stage
    var Stage = function(params){
        this._params = params||{};
        this._settings = {
            status:0,						//stage's stauts:
                                            //0:inactive/terminated
                                            //1:active
                                            //2:paused
                                            //3:temporary
                                            //4:abnorm
            maps:[],						//maps list
            audio:[],						//audio resource
            images:[],						//picture resource
            items:[],						//item resource
            timeout:0,						//count-down(judging process GIF status)
            update:function(){}				//dealing relative relations between different items
        };
        _extend(this,this._settings,this._params);
    };
    //reset items' postion
    Stage.prototype.resetItems = function(){
        this.status = 1;
        this.items.forEach(function(item,index){
            _extend(item,item._settings,item._params);
            item.index = index;
            item.stage = this;
            if(item.location){
                var position = item.location.coord2position(item.coord.x,item.coord.y);
                item.x = position.x;
                item.y = position.y;
            }
        }.bind(this));
    };
    //reset maps
    Stage.prototype.resetMaps = function(){
        this.status = 1;
        this.maps.forEach(function(map){
            _extend(map,map._settings,map._params);
            map.data = JSON.parse(JSON.stringify(map._params.data));
            map.stage = this;
            map.y_length = map.data.length;
            map.x_length = map.data[0].length;
        }.bind(this));
    };
    //reset
    Stage.prototype.reset = function(){
        _extend(this,this._settings,this._params);
        this.resetItems();
        this.resetMaps();
    };
    //add items
    Stage.prototype.createItem = function(options){
        var item = new Item(options);
        //dynamic property
        item.stage = this;
        item.index = this.items.length;
        if(item.location){
            var position = item.location.coord2position(item.coord.x,item.coord.y);
            item.x = position.x;
            item.y = position.y;
        }
        this.items.push(item);
        return item;
    };
    //get item
    Stage.prototype.getItemsByType = function(type){
        var items = this.items.filter(function(item){
            if(item.type==type){
                return item;
            }
        });
        return items;
    };
    //add map
    Stage.prototype.createMap = function(options){
        var map = new Map(options);
        //dynamic property
        map.data = JSON.parse(JSON.stringify(map._params.data));
        map.stage = this;
        map.y_length = map.data.length;
        map.x_length = map.data[0].length;
        map.imageData = null;
        this.maps.push(map);
        return map;
    };
    //bound events to maps
    Stage.prototype.bind = function(eventType,callback){
        if(!_events[eventType]){
            _events[eventType] = {};
            window.addEventListener(eventType,function(e){
                var key = 's' + _index;
                if(_events[eventType][key]){
                    _events[eventType][key](e);
                }
                e.preventDefault();
            });
        }
        _events[eventType]['s'+this.index] = callback.bind(this);	//active scope of events
    };
    //start animation
    this.start = function() {
        var f = 0;		//frame calculater
        var fn = function(){
            var stage = _stages[_index];
            _context.clearRect(0,0,_.width,_.height);		//clear canvas
            f++;
            if(stage.timeout){
                stage.timeout--;
            }
            if(stage.update()!=false){
                stage.maps.forEach(function(map){
                    if(!(f%map.frames)){
                        map.times = f/map.frames;
                    }
                    if(map.cache){
                        if(!map.imageData){
                            _context.save();
                            map.draw(_context);
                            map.imageData = _context.getImageData(0,0,_.width,_.height);
                            _context.restore();
                        }else{
                            _context.putImageData(map.imageData,0,0);
                        }
                    }else{
                    	map.update();
                        map.draw(_context);
                    }
                });
                stage.items.forEach(function(item){
                    if(!(f%item.frames)){
                        item.times = f/item.frames;
                    }
                    if(stage.status==1&&item.status!=2){  	//both item&stage are not in paused status
                        if(item.location){
                            item.coord = item.location.position2coord(item.x,item.y);
                        }
                        if(item.timeout){
                            item.timeout--;
                        }
                        item.update();
                    }
                    item.draw(_context);
                });
            }
            _hander = requestAnimationFrame(fn);
        };
        _hander = requestAnimationFrame(fn);
    };
    //stop animation
    this.stop = function(){
        _hander&&cancelAnimationFrame(_hander);
    };
    //get event postion
    this.getPosition = function(e){
        var box = $canvas.getBoundingClientRect();
        return {
            x:e.clientX-box.left*(_.width/box.width),
            y:e.clientY-box.top*(_.height/box.height)
        };
    }
    //create stage
    this.createStage = function(options){
        var stage = new Stage(options);
        stage.index = _stages.length;
        _stages.push(stage);
        return stage;
    };
    //set stage
    this.setStage = function(index){
        _stages[_index].status = 0;
        _index = index;
        _stages[_index].status = 1;
        return _stages[_index];
    };
    //next lay-out
    this.nextStage = function(){
        if(_index<_stages.length-1){
            _stages[_index].status = 0;
            _index++;
            _stages[_index].status = 1;
            return _stages[_index];
        }else{
            throw new Error('unfound new stage.');
        }
    };
    //initiate game
    this.init = function(){
        _index = 0;
        layer.config({
            // anim: 5, //默认动画风格
            skin:'layer-ext-espresso',
            extend:'espresso/style.css'            // time: 2000,
        });

        this.start();
    };
}
