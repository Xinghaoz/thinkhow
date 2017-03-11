$(document).ready(function() {
    $(".fa-refresh").hover(function() {
        val = $(this).attr("class");
        if (val.includes("fa-refresh")) {
            $(this).addClass("fa-pulse");
        }
    },
    function() {
        val = $(this).attr("class");
        if (val.includes("fa-refresh")) {
            $(this).removeClass("fa-pulse");
        }
    });

    $("#animation-btn").click(function() {
        $(this).addClass("btn-active");
        $(".bangumi-list").fadeIn(777);
        $("#game-btn").removeClass("btn-active");
        $(".game-list").fadeOut(0);
        $(".game-time").hide();
        $(".bangumi-time").show();
    })

    $("#game-btn").click(function() {
        $(this).addClass("btn-active");
        $(".game-list").fadeIn(777);
        $("#animation-btn").removeClass("btn-active");
        $(".bangumi-list").fadeOut(0);
        $(".bangumi-time").hide();
        $(".game-time").show();
    })

    $(".zhihu-btn").click(function () {
        $(".zhihu-btn").removeClass("btn-active");
        $(this).addClass("btn-active");
        value = $(this).attr("value");

        $(".zhihu-wrapper").hide();
        $("." + value).fadeIn(777);
    })

    $(".fa-refresh").click(function () {
        val = $(this).attr("class");
        if (val.includes("fa-refresh")) {
            $(this).addClass("fa-spinner");
            $(this).removeClass("fa-refresh");
        }
    });

    $(".tv-list li a img").hover(function() {
        $(this).animate({width: '311.1328125px', height: '177px'}, "slow");
    },
    function() {
        $(this).animate({width: '263.671875px', height: '150px'}, "slow");
    });
});
