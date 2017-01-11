// CSRF set-up copied from Django docs
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
      var csrftoken = getCookie('csrftoken');
      $.ajaxSetup({
        beforeSend: function(xhr, settings) {
            xhr.setRequestHeader("X-CSRFToken", csrftoken);
        }
      });
var result_form = $('<form/>').attr({
                            id : 'result_form',
                            });
      var result_cash = $('<input/>').attr({
                            type: 'hidden',
                            value: "11",
                            name: 'result_cash'});
      var result_deposit = $('<input/>').attr({
                            type: 'hidden',
                            value: "12",
                            name: 'result_deposit'});

$(result_form).append(result_cash);
$(result_form).append(result_deposit);

console.log(result_form);
results = $(result_form).serialize();
console.log(results);
$.ajax({
  type: "POST",
  url: "/lovelive/result",
  data: results,
  success: function(data){
    console.log("success posting result");
    window.location = "/lovelive/home/";
  }
});
