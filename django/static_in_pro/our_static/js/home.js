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
                    jsx: <div>Group membership and name services: Implemented a naming system as a replacement for DNS within the cluster.
                              Data publish/subscribe system: Implemented a Kafka-like system, that is to use Znodes to represent the "topics" where the providers can publish to and the consumers can consume from.
                              Distributed mutexes: Implemented distributed locks which can avoid Herd Effect.
                         </div>,
                    label: "Distributed Applications",
                    link: "/crawler",
                },
        ],
    },
    {
        key: 3,
        text: "Hobbies",
        view: [{
                    jsx: <div className="h1">To Do</div>,
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
    },
    getInitialState: function () {
        return {
            currentItemIndex: 0,
        };
    },
    onChildChanged: function (newState) {
        this.setState({
            currentItemIndex: newState,
        });
    },

    render() {
        if (!this.props.hasMultipleItems) {
            return <div>{this.props.itemList}</div>
        } else {
            var selectors = [];
            for (var i = 0; i < this.props.itemList.length; i++) {
                if (i != this.state.currentItemIndex) {
                    selectors.push(<li key={i} className="li-view">
                                    <Selector className="selector-view" id={i} label={this.props.itemList[i].props.label} callbackParent={this.onChildChanged} />
                                    </li>);
                } else {
                    selectors.push(<li key={i} className="li-view">
                                    <Selector className="selector-view item-active" id={i} label={this.props.itemList[i].props.label} callbackParent={this.onChildChanged} />
                                    </li>);
                }
            }
            return  <div>
                        <div style={{margin:"0 0 25px 0"}} className="selector-view-container">
                            <ul className="ul-view">
                                {selectors}
                            </ul>
                        </div>
                        <div style={{clear:"both"}}></div>
                        <div>{this.props.itemList[this.state.currentItemIndex]}</div>

                        <div className="text-align-center">
                            <a className="btn-link" href={this.props.itemList[this.state.currentItemIndex].props.link} target="_blank">
                                <button className="btn btn-danger">Detail</button>
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

var dd = data[0];
ReactDOM.render(
<MyContainer viewList={viewList}/>
,
document.getElementById('my-container')
);
