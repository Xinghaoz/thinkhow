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
            <form onSubmit={this.handleSubmit}>
                <label>
                    Url:
                    <input className="input-form" type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input className="btn btn-primary" type="submit" value="Find" />
            </form>
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
