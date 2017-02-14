var data = [
    {
        key: 1,
        text: "Resume",
        link: "/about/resume",
        jsx: <div className="row">
                <div className="col-md-6 col-sm-12 text-align-center">
                    <div className="btn-container">
                        <a href="/about/resume" target="_blank"><img className="photo-resume" src="static/img/pdf1.png"/></a>
                        <p className="p-resume">
                            PDF version: More formal and suitable for printing.
                        </p>
                        <a href="/about/resume" target="_blank"><button type="button" className="btn btn-danger">PDF</button></a>
                    </div>
                </div>
                <div className="col-md-6 col-sm-12 text-align-center">
                    <div className="btn-container">
                        <a href="/about/resume_html" target="_blank"><img className="photo-resume" src="static/img/pdf2.png"/></a>
                        <p className="p-resume">
                            HTML version: Utilize the advantages of HTML and Javascript.
                        </p>
                        <a href="/about/resume_html" target="_blank"><button type="button" className="btn btn-danger">HTML</button></a>
                    </div>
                </div>
            </div>
    },
    {
        key: 2,
        text: "My work",
        link: "/about/website",
        jsx: <div className="h1">I am</div>,
    },
    {
        key: 3,
        text: "Hobbies",
        link: "/todo",
        jsx: <div className="h1">Xinghao</div>,
    },
];

var MyContainer = React.createClass({
    getDefaultProps : function () {
        return {
            title : 'Hello World'
            };
        },
    getInitialState: function () {
        return {
            hasMultipleItems: false,
            jsx: <div>
                    <div className="row">
                        <div className="col-md-5 col-sm-12">
                            <img className="my-photo" src="static/img/me.jpg"/>
                        </div>
                        <div className="col-md-7 col-sm-12">
                            <div className="introduction">
                                Hi!  I am a master student from Carnegie Mellon University, major in Electrical and Computer Engineering.
                                I've already graduated in December 2016 and now I am actively looking for a full-time job.
                                My interest focuses on Distributed System and building cloud infrastructure.
                                I've applied my knowledge in many projects.  For example, I used ZooKeeper to implement Master Election, Distributed lock, Distributed Counter and Distributed Barrier.
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
                        <i className="fa fa-envelope-o fa-4x">xinghaoz@andrew.cmu.edu</i>
                    </div>
                </div>
        };
    },
    onChildChanged: function (newState) {
        this.setState({
            jsx: newState
        });
    },
    render() {
        var rows = [];
        // Smart!!!
        for (var i = 0; i < data.length; i++) {
            var d = data[i];
            rows.push(<Selector key={d.key} text={d.text} link={d.link} jsx={d.jsx} callbackParent={this.onChildChanged}/>);
        }
        return  <div>
                    <ul className="sidebar">
                    {
                        rows // Smart!!!
                    }
                    </ul>
                    <h1 className="name-title text-align-center">Hi! I am Xinghao Zhou</h1>
                    <div className="detail">
                        {this.state.jsx}
                    </div>
                </div>
    },
});

var Item = React.createClass({
    propTypes: {
        jsx: React.PropTypes.Object.isRequired,
    },

    render() {
        this.props.jsx;
    }
});

var MyView = React.createClass({
    propTypes: {
        itemList: React.PropTypes.array.isRequired,
    },

    render() {
        return this.props.itemList;
    }
});

var Selector = React.createClass({
// class Selector extends React.Component {
    propTypes: {
    //   text: React.PropTypes.string.isRequired,
    //   link: React.PropTypes.string.isRequired,
    //   jsx: React.PropTypes.object.isRequired,
    },

    handleClick(event) {
        this.props.callbackParent(this.props.jsx);
    },

    render() {
        return  <div>
                    <li className="selector" onClick={this.handleClick}>
                    <div className="nav-p">{this.props.text}</div>
                    </li>
                </div>
    }
});

ReactDOM.render(
<MyContainer />
,
document.getElementById('my-container')
);
