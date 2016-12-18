function MyWebSocket() {
  var my_room_id;
  var begin_counter = 0;
  $.get("/lovelive/get-my-room-id/")
    .done(function(data1) {
      console.log("get my room id: " + data1.my_room_id);
      if (data1.my_room_id == -1) {
        window.location = "/lovelive/error-lovelive/";
      } else {
        my_room_id = data1.my_room_id;
        //connect
        ws = new WebSocket("ws://" + window.location.host + "/lovelive/channel/" + my_room_id);
        //tell arrival
        $.get("/lovelive/get-my-initial-property/")
          .done(function(data2) {
            console.log("tell arrival: just tell username: " + data2.username);
              //send arrival infos
              ws.send("0" + "##@##" + data2.username);
              //listen
              ws.onmessage = function(message) {
                console.log("~~~on message~~~~");
                var mes = JSON.parse(message.data);
                if (begin_counter != 4) {//waiting
                  if (mes.type_no == '0') {
                    begin_counter++;
                    console.log("begin counter:" + begin_counter);
                  }
                  if (begin_counter == 3) {
                    //tell game start
                    ws.send("1" + "##@##" + "game start");
                  }
                  if (mes.type_no == '1') { //means game begin
                    begin_counter = 4; //4 means game begin
                    console.log("all here, begin the game");
                    //game begin, ask all the players to send their information to every one the group
                    $.get("/lovelive/get-my-initial-property/")
                      .done(function(data3) {
                        console.log("get-my-initial-property");
                          ws.send("2" + "##@##" + data3.username + "##@##" + data3.cash + "##@##" + data3.deposit);
                      });
                  }
                } else {//all users join in, begin
                  if (mes.type_no == '2') {
                    //receive and show other users' infos
                    console.log("------------username:" + mes.username);
                    console.log("------------cash:" + mes.cash);
                    console.log("------------deposit: " + mes.deposit);
                  }
                  //game begin now
                  // ws.send("3" + "##@##" + "??" + "##@##" + "??" + "##@##" + "??");
                  //game begin now
                  if (mes.type_no == '3') {
                    console.log("username: " + mes.username);
                    console.log("action_1: " + mes.action_1);
                    console.log("action_2: " + mes.action_2);
                    console.log("action_3: " + mes.action_3);
                  }
                }
               }
      });
    };
  });
}
// //----------------------------------------------------
// $(document).ready(function (){
//   MyWebSocket();
// });
