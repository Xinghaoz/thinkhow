## About JavaScript
In Js, that doesn't work:
```
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
        success: function(data) {
            for (var i = 0; i < data.keywords.length; i++) {
                var keyword = data.keywords[i];
                console.log("keyword = " + keyword.key + "\tcount = " + keyword.count);
                this.setState({keywords: [{keyword: "aaa", count:4}],});
                // this.state.keywords.push({'keyword': keyword.key, 'count': keyword.count});
            }
        },
    });
}
```
But that does work:
```
success: (data) => {
    for (var i = 0; i < data.keywords.length; i++) {
        var keyword = data.keywords[i];
        console.log("keyword = " + keyword.key + "\tcount = " + keyword.count);
        this.setState({keywords: [{keyword: "aaa", count:4}],});
        // this.state.keywords.push({'keyword': keyword.key, 'count': keyword.count});
    }
},
```
It seems that using function will cause itself a class like environment, so that the call to "this" will refer to "success" instead of the outer class.
