var data = [
    {
        key: 1,
        text: "Resume",
        link: "/about/resume",
        jsx: <div className="h1"><a href="/about/resume" target="_blank">PDF</a></div>,
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

var Content = React.createClass({
    getInitialState: function () {
        return {
            jsx: <div>
                    <div className='name'>
                    <img className="my-photo" src="static/img/me.jpg"/>
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

var Selector = React.createClass({
// class Selector extends React.Component {
    propTypes: {
      text: React.PropTypes.string.isRequired,
      link: React.PropTypes.string.isRequired,
      jsx: React.PropTypes.object.isRequired,
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
<Content />
,
document.getElementById('my-container')
);
