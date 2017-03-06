class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <div className="text-align-center">
                <div style={{position:"relative", width:"300px", display:"block", margin:"auto"}}>
                    <form onSubmit={this.handleSubmit}>
                            <label>Url:</label>
                            <div>
                                <input className="input-form" type="text" value={this.state.value} onChange={this.handleChange} />
                            </div>
                            <div style={{clear:"both", margin:"7px"}}></div>
                            <label>Number of word:</label>
                            <div>
                                <input className="input-form" type="text" value={this.state.value} onChange={this.handleChange} />
                            </div>
                            <div style={{clear:"both", margin:"7px"}}></div>
                            <div className="text-align-center">
                                <input className="btn btn-primary" type="submit" value="Find" />
                            </div>
                    </form>
                </div>
            </div>
        );
    }
}

ReactDOM.render(
<div className="text-align-center outer-container">
<NameForm />
</div>
,
document.getElementById('my-container')
);
