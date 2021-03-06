function getCookie(name) {
  var cookieValue = null;
  if (document.cookie && document.cookie != '') {
      var cookies = document.cookie.split(';');
      for (var i = 0; i < cookies.length; i++) {
          var cookie = jQuery.trim(cookies[i]);
          // Does this cookie string begin with the name we want?
          if (cookie.substring(0, name.length + 1) == (name + '=')) {
              cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
              break;
          }
      }
  }
  return cookieValue;
}

var NameForm = React.createClass({
// class NameForm extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         url: 'http://www.cnn.com/2013/06/10/politics/edward-snowden-profile/',
    //         n: 3,
    //         keywords: [],
    //     };
    //
    //     this.handleChange = this.handleChange.bind(this);
    //     this.handleNChange = this.handleNChange.bind(this);
    //     this.handleSubmit = this.handleSubmit.bind(this);
    // }

    getInitialState: function () {
        return {
            url: 'http://www.xingz.me',
            n: 3,
            keywords: [],
        };
    },

    handleChange(event) {
        this.setState({url: event.target.value});
    },

    handleNChange(event) {
        this.setState({n: event.target.value});
    },

    handleSubmit(event) {
        // alert('A url was submitted: ' + this.state.url);
        event.preventDefault();
        var csrftoken = getCookie('csrftoken');
        $.ajaxSetup({
          beforeSend: function(xhr, settings) {
              xhr.setRequestHeader("X-CSRFToken", csrftoken);
          }
        });
        $.ajax({
            type: "POST",
            url: "/get_keywords/",
            data: {
                url: this.state.url,
                n: this.state.n,
            },
            success: (data) => {
                this.setState({keywords: []});
                // var newKeywordArray = []; // The other way to do that
                for (var i = 0; i < data.keywords.length; i++) {
                    var keyword = data.keywords[i];
                    var newKeyword = {keyword: keyword.key, count: keyword.count};
                    this.setState({keywords: this.state.keywords.concat(newKeyword)});
                    // newKeywordArray.push({keyword: keyword.key, count: keyword.count});
                }
                // this.setState({keywords: newKeywordArray});
            },
        });
    },

    render() {
        var keywordArray = []
        for (var i = 0; i < this.state.keywords.length; i++) {
            keywordArray.push(<tr key={i}>
                                <td>{ this.state.keywords[i].keyword }</td>
                                <td className="finder-td">{ this.state.keywords[i].count }</td>
                            </tr>);
        }
        var contentToShow = <div></div>
        if (keywordArray.length != 0) {
            contentToShow = <table className="finder-table">
                              <tr>
                                <th>Keyword</th>
                                <th className="finder-th">Count</th>
                              </tr>
                              { keywordArray }
                            </table>
        }
        return (
            <div className="text-align-center">
                <div style={{position:"relative", width:"300px", display:"block", margin:"auto"}}>
                    <form onSubmit={this.handleSubmit}>
                            <label>Url:</label>
                            <div>
                                <input className="input-form" type="text" value={this.state.url} onChange={this.handleChange} />
                            </div>
                            <div style={{clear:"both", margin:"7px"}}></div>
                            <label>Number of word:</label>
                            <div>
                                <input className="input-form" type="text" value={this.state.n} onChange={this.handleNChange} />
                            </div>
                            <div style={{clear:"both", margin:"7px"}}></div>
                            <div className="text-align-center">
                                <input className="btn btn-primary" type="submit" value="Find" />
                            </div>
                    </form>
                </div>
                <div className="text-align-center finder-result">
                    { contentToShow }
                </div>
            </div>
        );
    }
});

var data = [
    {
        key: 0,
        text: "Home",
        view: [{
                    jsx: <div>
                        <div className="row">
                            <div className="col-md-4 col-sm-12">
                                <img className="my-photo" src="static/img/me.jpg"/>
                            </div>
                            <div className="col-md-8 col-sm-12">
                                <div className="introduction">
                                    Hi!  I am a master student from Carnegie Mellon University, major in Electrical and Computer Engineering.
                                    I've already graduated in December 2016 and now I am actively looking for a full-time job.
                                    My interest focuses on Distributed System and building cloud infrastructure.
                                    I've applied my knowledge in many projects.  For example, I used ZooKeeper to implement Group membership and name services, Data publish/subscribe system and Distributed locks.
                                    I am always looking forward to learning new technique such as Spark and Beam.  I am planning to contribute my code to these open sources.
                                </div>
                            </div>
                        </div>

                        <div className='information'>
                            <i className="fa fa-github fa-4x"><a href='https://github.com/Xinghaoz' target='_black'>Github</a></i>
                        </div>
                        <div className='information'>
                            <i className="fa fa-facebook-official fa-4x"><a href='https://www.facebook.com/profile.php?id=100010153695374' target='_blank'>Facebook </a></i>
                        </div>
                        <div className='information'>
                            <i className="fa fa-linkedin-square fa-4x"><a href='https://www.linkedin.com/in/xinghaoz' target='_blank'>LinkedIn</a></i>
                        </div>
                        <div className='information'>
                            <i className="fa fa-envelope-o fa-4x"><a href='mailto:xinghaoz@andrew.cmu.edu' target='_top'>xinghaoz@andrew.cmu.edu</a></i>
                        </div>
                    </div>,
                    link: "/",
                },
        ],
    },
    {
        key: 1,
        text: "Resume",
        view: [{
                    jsx: <div className="row">
                        <div className="col-md-6 col-sm-12 text-align-center">
                            <div className="btn-container">
                                <a href="/about/resume" target="_blank"><img className="photo-resume" src="static/img/pdf1.png"/></a>
                                <p className="p-resume">
                                    PDF version (Most recent): More formal and suitable for printing.
                                </p>
                                <a href="/about/resume" target="_blank"><button type="button" className="btn btn-danger">PDF</button></a>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12 text-align-center">
                            <div className="btn-container">
                                <a href="/about/resume_html" target="_blank"><img className="photo-resume" src="static/img/pdf2.png"/></a>
                                <p className="p-resume">
                                    HTML version (Old version): Utilize the advantages of HTML and Javascript.
                                </p>
                                <a href="/about/resume_html" target="_blank"><button type="button" className="btn btn-danger">HTML</button></a>
                            </div>
                        </div>
                    </div>,
                    link: "/about/resume",
                },
        ],
    },
    {
        key: 2,
        text: "My work",
        view: [{
                    jsx:<div>
                            <div className="text-align-center">
                                <a href="/static/img/diagram.png" target="_blank"><img className="img-item" src="/static/img/diagram.png"/></a>
                            </div>
                            <div style={{margin:"10px 25px 10px 25px"}} className="p-item">
                                In this website, I use some crawlers written by Scrapy to collect the content from the websites that I often visite,
                                which saves me the trouble visiting them one by one.
                            </div>
                        </div>,
                    label: "Crawler",
                    link: "/crawler",
                },
                {
                    jsx: <div className="container-mywork">
                            <ul className="ul-mywork">
                                <li>
                                    Group membership and name services: Implemented a naming system as a replacement for DNS within the cluster. Joined nodes are recorded in a group path. Nodes that go down are automatically removed from the list, thus cluster always has an up-to-date directory of the active nodes.
                                </li>
                                <li>
                                    Centralized configuration manager: Use ZooKeeper to manage the cluster’s configuration. Whenever the cluster’s configuration changes, nodes in the cluster can be notified immediately thus they can update the configuration in real time.
                                </li>
                                <li>
                                    Distributed mutexes: Implemented distributed locks which can avoid Herd Effect.
                                </li>
                            </ul>
                         </div>,
                    label: "Distributed Applications",
                    link: "/crawler",
                },
                {
                    jsx: <div className="text-align-center">
                            <p>Given a URL, the Keywords Finder will return the keywords which can best sumarize the page.</p>
                            <p>Notice: The url must start with "http://"</p>
                            <div className="text-align-center">
                                <NameForm />
                            </div>
                         </div>,
                    label: "Keywords Finder",
                    link: "/keywords_finder",
                },
        ],
    },
    {
        key: 3,
        text: "Hobbies",
        view: [{
                    jsx: <div text-align-center>
                            <img className="img-photo" src="/static/img/diagram.png"/>
                            <img className="img-photo" src="/static/img/diagram.png"/>
                            <img className="img-photo" src="/static/img/diagram.png"/>
                            <img className="img-photo" src="/static/img/diagram.png"/>
                        </div>,
                    link: "/todo",
                },
        ],
    },
];

var MyContainer = React.createClass({
    propTypes: {
        viewList: React.PropTypes.array.isRequired,
    },

    getInitialState: function () {
        return {
            currentView: viewList[0],
        };
    },
    onChildChanged: function (newState) {
        this.setState({
            currentView: viewList[newState]
        });
    },
    render() {
        var selectors = [];
        // // Smart!!!
        for (var i = 0; i < data.length; i++) {
            var d = data[i];
            selectors.push(<li key={i}>
                            <Selector className="selector-container" id={i} label={data[i].text} callbackParent={this.onChildChanged} />
                            </li>);
        }
        return  <div>
                    <ul className="sidebar">
                    {
                        selectors
                    }
                    </ul>
                    <h1 className="name-title text-align-center">Hi! I am Xinghao Zhou</h1>
                    <div className="detail">
                        {this.state.currentView}
                    </div>
                </div>
    },
});

var Selector = React.createClass({
    propTypes: {
        label: React.PropTypes.string.isRequired,
        height: React.PropTypes.number,
        width: React.PropTypes.number,
    },

    handleClick(event) {
        this.props.callbackParent(this.props.id);
    },

    render() {
        return <div className={this.props.className} style={{height:"inherit", width:"inherit"}} onClick={this.handleClick}>{this.props.label}</div>

    }
});

var Item = React.createClass({
    propTypes: {
        text: React.PropTypes.string.isRequired,
        link: React.PropTypes.string.isRequired,
        jsx: React.PropTypes.object.isRequired,
        label: React.PropTypes.string,
    },

    render() {
        return this.props.jsx;
    }
});

var MyView = React.createClass({
    propTypes: {
        itemList: React.PropTypes.array.isRequired,
        hasMultipleItems: React.PropTypes.bool,
        // autoPlay:React.PropTypes.bool,
        activeIndex:React.PropTypes.number,
        defaultActiveIndex:React.PropTypes.number,
        direction:React.PropTypes.string,
    },
    getDefaultProps(){
        return{
            interval:2500,
            // autoPlay:true,
            defaultActiveIndex:0,
            direction:'right',
        }
    },
    getInitialState: function () {
        return {
            // currentItemIndex: 0,
            activeIndex:this.props.defaultActiveIndex ? this.props.defaultActiveIndex : 0,
            // currentItemIndex :this.props.defaultActiveIndex ? this.props.defaultActiveIndex : 0,
            direction:this.props.direction ? this.props.direction:'right',
            isAutoPlay:true,
        };
    },
    onChildChanged: function (newState) {
        this.setState({
            // currentItemIndex: newState,
            activeIndex: newState,
        });
    },
    componentDidMount(){
        this.autoPlay();
    },
    componentWillUnmount(){
        clearInterval(this.timeOuter);
    },
    onMouseOver() {
        clearInterval(this.timeOuter);
        // this.setState({
        //     isAutoPlay: false,
        // });
        // console.log("state" + this.state.isAutoPlay);
    },
    onMouseOut() {
        this.autoPlay();
    },
    autoPlay(){
        // Only get in once!
        // console.log("Inside autoPlay " + this.state.isAutoPlay);
        if (this.state.isAutoPlay){
            if(this.props.direction==="right"){
                this.timeOuter = setInterval(this.playRight,this.props.interval);
            } else if (this.props.direction==="left"){
                this.timeOuter = setInterval(this.playLeft,this.props.interval);
            }
        }
    },
    playRight(indexIn){
        let index = indexIn ? indexIn : this.state.activeIndex + 1;
        // console.log(index);
        if(index > this.props.itemList.length - 1){
            index = 0;
        }
        this.setState({
            activeIndex:index
        })
    },
    playLeft(indexIn){
        let index=indexIn?indexIn:this.state.activeIndex-1;
        // console.log(index);
        if(index < 0){
            index = this.props.itemList.length - 1;
        }
        this.setState({
            activeIndex:index
        })
    },
    left(){
        clearInterval(this.timeOuter);
        let oldIndex=this.props.activeIndex;
        this.playLeft(oldIndex+1);
        this.autoPlay();
    },
    right(){
        clearInterval(this.timeOuter);
        let oldIndex=this.props.activeIndex;
        this.playRight(oldIndex-1);
        this.autoPlay();
    },


    render() {
        if (!this.props.hasMultipleItems) {
            return <div>{this.props.itemList}</div>
        } else {
            var selectors = [];
            for (var i = 0; i < this.props.itemList.length; i++) {
                if (i != this.state.activeIndex) {
                    selectors.push(<li key={i} className="li-view">
                                    <Selector className="selector-view" id={i} label={this.props.itemList[i].props.label} callbackParent={this.onChildChanged} />
                                    </li>);
                } else {
                    selectors.push(<li key={i} className="li-view">
                                    <Selector className="selector-view item-active" id={i} label={this.props.itemList[i].props.label} callbackParent={this.onChildChanged} />
                                    </li>);
                }
            }
            return  <div onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut}>
                        <div style={{margin:"0 0 25px 0"}} className="selector-view-container">
                            <ul className="ul-view">
                                {selectors}
                            </ul>
                        </div>
                        <div style={{clear:"both"}}></div>
                        <div>{this.props.itemList[this.state.activeIndex]}</div>

                        <div className="text-align-center">
                            <a className="btn-link" href={this.props.itemList[this.state.activeIndex].props.link} target="_blank">
                                <button className="btn btn-danger btn-detail">Detail</button>
                            </a>
                        </div>
                    </div>
        }
    }
});

var viewList = [];
for (var i = 0; i < data.length; i++) {
    var d = data[i];
    var itemList = [];
    for (var j = 0; j < d.view.length; j++) {
        itemList.push(<Item key={j} text={d.text} link={d.view[j].link} jsx={d.view[j].jsx} label={d.view[j].label} />);
    }
    if (itemList.length > 1) {
        viewList.push(<MyView itemList={itemList} hasMultipleItems={true} />);
    } else {
        viewList.push(<MyView itemList={itemList} hasMultipleItems={false} />);
    }
}



ReactDOM.render(
<MyContainer viewList={viewList}/>
,
document.getElementById('my-container')
);
