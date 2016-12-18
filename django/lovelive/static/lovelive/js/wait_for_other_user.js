var gamestart = 0;//0:not start, 1:start


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
//join the wait queue by clicking the map
function join_wait_queue() {
    var csrftoken = getCookie('csrftoken');
    $.ajaxSetup({
      beforeSend: function(xhr, settings) {
          xhr.setRequestHeader("X-CSRFToken", csrftoken);
      }
    });
    console.log("click to join wait queue");
    $.post("/lovelive/join-room/")
              .done(function(data) {
                  console.log("back from views now in js");
                  //$("#default_map").addClass( "wait_background blur" );
                  var wait_background_div = $("#choose_map_background");
                  $(wait_background_div).empty();
                  var wait_queue_block = $('<div/>', {
                        "class": "wait_queue_block",
                      });
                  var wait_queue_title = $('<p/>', {
                        "class": "wait_queue_title",
                        html: "Waiting...",
                      });
                  $(wait_queue_title).insertBefore(wait_background_div);
                  // display the wait queue user
                  if (data.players.length > 0) {
                    console.log("players in");
                    for (var i = 0; i < data.players.length; i++) {
                      var player_in_queue = data.players[i]
                      var player_id = player_in_queue.player_id;
                      console.log("id" + player_id);
                      var player_username = player_in_queue.player_username;
                      console.log("player_username" + player_username);
                      var player_picture = player_in_queue.player_picture;
                      console.log("player_picture" + player_picture);
                      if (player_picture == 0) {//default picture
                        var player_in_queue_player_picture = $('<img>', {class: 'player_in_queue_player_picture',
                                                    src: "/static/lovelive/pictures/default_profile_picture.png",
                                                    alt: player_username});
                      }
                      else {
                        var player_in_queue_player_picture = $('<img>', {class: 'player_in_queue_player_picture',
                                                    src: '/lovelive/get-other-profile-photo/' + player_id,
                                                    alt: player_username});
                      }
                      var player_in_queue_player_username = $('<p>', {"class": 'player_in_queue_player_username', html:player_username});
                      var wait_queue_single_block = $('<div/>', {
                            "class": "wait_queue_single_block",
                          });
                      $(wait_queue_single_block).append($(player_in_queue_player_picture));
                      $(wait_queue_single_block).append($(player_in_queue_player_username));
                      $(wait_queue_block).append($(wait_queue_single_block));
                  };
                  $(wait_background_div).append($(wait_queue_block));
              };//if end
              console.log("begin status is : ");
              console.log(data.begin_status);
              if (data.begin_status == 1) {
                gamestart = 1;
                wait_queue_full_start_game();
              }
            });//post.done end

}//join wait queue end
function getUpdates() {
    if (gamestart == 1) {
      return;
    }
    console.log("enter getupdates");
    $("#choose_map_background").empty();
    $.get("/lovelive/check-if-other-user-join-in/")
      .done(function(data) {
        console.log("check-if-other-user-join-in....enter js");
        var wait_queue_block = $('<div/>', {
              "class": "wait_queue_block",
            });
        var wait_background_div = $("#choose_map_background");
        // display the wait queue user
        if (data.players.length > 0) {
          console.log("players in");
          for (var i = 0; i < data.players.length; i++) {
            var player_in_queue = data.players[i]
            var player_id = player_in_queue.player_id;
            console.log("id" + player_id);
            var player_username = player_in_queue.player_username;
            console.log("player_username" + player_username);
            var player_picture = player_in_queue.player_picture;
            console.log("player_picture" + player_picture);
            if (player_picture == 0) {//default picture
              var player_in_queue_player_picture = $('<img>', {class: 'player_in_queue_player_picture',
                                          src: "/static/lovelive/pictures/default_profile_picture.png",
                                          alt: player_username});
            }
            else {
              var player_in_queue_player_picture = $('<img>', {class: 'player_in_queue_player_picture',
                                          src: '/lovelive/get-other-profile-photo/' + player_id,
                                          alt: player_username});
            }
            var player_in_queue_player_username = $('<p>', {"class": 'player_in_queue_player_username', html:player_username});
            var wait_queue_single_block = $('<div/>', {
                  "class": "wait_queue_single_block",
                });
            $(wait_queue_single_block).append($(player_in_queue_player_picture));
            $(wait_queue_single_block).append($(player_in_queue_player_username));
            $(wait_queue_block).append($(wait_queue_single_block));
        };
        $(wait_background_div).append($(wait_queue_block));

      }//end if
      console.log("begin status is : ");
      console.log(data.begin_status);
      if (data.begin_status == 1) {
        gamestart = 1;
        wait_queue_full_start_game();
      }
    });//end post
}//end getUpdates function

function wait_queue_full_start_game(){
    console.log("-----------START THE GAME-------------");
    $(".wait_queue_title").remove();
    var wait_background_div = $("#choose_map_background");
    var start_game_block = $('<div/>', {
          "class": "start_game_block",
        });

    var start_game_title = $('<a/>', {
          href: "/lovelive/game/",
          html:"Game Start!",
          "class": "start_game_title",
        });
    $(start_game_block).append($(start_game_title));
    $(wait_background_div).append($(start_game_block));
    //wait for 3 seconds and begin the game
    // delay(function(){
    //      click_to_start()
    // }, 3000 ); // end delay
}

var delay = ( function() {
    var timer = 0;
    return function(callback, ms) {
        clearTimeout (timer);
        timer = setTimeout(callback, ms);
    };
})();
delay(function(){
    console.log("hei")
}, 6100 ); // end delay
$(document).ready(function (){
  $( "#default_map" ).one({
      "click": function() {
        //first join in wait queue
        join_wait_queue();
        window.setInterval(getUpdates, 5000);
      }

    });//end one
});
