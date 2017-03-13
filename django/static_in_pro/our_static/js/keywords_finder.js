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
            keywords: [],
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleNChange = this.handleNChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({url: event.target.value});
    }

    handleNChange(event) {
        this.setState({n: event.target.value});
    }


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
    }

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
}

ReactDOM.render(
<div className="text-align-center outer-container">
<NameForm />
</div>
,
document.getElementById('my-container')
);
