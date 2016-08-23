$(document).ready(function() {
    $(".fa-refresh").hover(function() {
        $(this).addClass("fa-pulse");
    },
    function() {
        $(this).removeClass("fa-pulse");
    });

    $("#animation-btn").click(function() {
        $(this).addClass("btn-active");
        $(".bangumi-list").fadeIn(777);
        $("#game-btn").removeClass("btn-active");
        $(".game-list").fadeOut(0);
    })

    $("#game-btn").click(function() {
        $(this).addClass("btn-active");
        $(".game-list").fadeIn(777);
        $("#animation-btn").removeClass("btn-active");
        $(".bangumi-list").fadeOut(0);
    })

    $("#bangumi-refresh").click(function () {
        $(this).addClass("fa-spinner");
        $(this).removeClass("fa-refresh");
        // $.ajax({
        //     type:'get',
        //     url:<YOUR SERVERSIDE PAGE URL>,
        //     cache:false,
        //     // data:<if any arguments>,
        //     async:asynchronous,
        //     // dataType:json, //if you want json
        //     success: function(data) {
        //
        //     },
        //     error: function(request, status, error) {
        //         alert("running python script error");
        //     }
        //
        // });
    });

    // $(".tv-img").hover(function() {
    //     // $(this).addClass("fa-pulse");
    //     alert("1");
    // },
    // function() {
    //     // $(this).removeClass("fa-pulse");
    //     alert("2");
    // });

    $(".tv-list li a img").hover(function() {
        $(this).animate({width: '311.1328125px', height: '177px'}, "slow");
    },
    function() {
        $(this).animate({width: '263.671875px', height: '150px'}, "slow");
    });
});
