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

class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            url: 'http://www.cnn.com/2013/06/10/politics/edward-snowden-profile/',
            n: 3,
        };

        this.handleChange = this.handleChange.bind(this);
        // this.handleChange = this.handleNChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({url: event.target.value});
    }

    handleNChange(event) {
        this.setState({n: event.target.value});
    }

    handleSubmit(event) {
        alert('A url was submitted: ' + this.state.url);
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
            success: function(data) {
                alert("You've added a new post!");
            },
        });
    }

    render() {
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
