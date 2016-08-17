$(document).ready(function() {
    var numOfArticle = $("article").length;
    var articles = $("article");
    var articleArray = [];
    var count = [];

    // For each article, store the kind of classes in a set.
    for (var i = 0; i < articles.length; i++) {
        var classes = $(articles[i]).attr("class").split(" ");
        var set = new Set();
        for (var j = 0; j < classes.length; j++) {
            set.add(classes[j]);
        }
        articleArray[i] = set;
        count[i] = set.size;
    }

    /* If the user check or uncheck the checkbox, it will traverse through all the article.
     * If the article's classes contains the checkbox's value, its count increase/decrease.  If the
     * count is one/zero, show/hide it.
     */
    $('input[type="checkbox"]').click(function() {
        var cla = $(this).val();
        if ($(this).prop("checked")) {
            for (var i = 0; i < articles.length; i++) {
                if (articleArray[i].has(cla)) {
                    count[i]++;
                    if (count[i] == 1) {
                        $(articles[i]).fadeIn(777);
                    }
                }
            }
        } else {
            for (var i = 0; i < articles.length; i++) {
                if (articleArray[i].has(cla)) {
                    count[i]--;
                    if (count[i] == 0) {
                        $(articles[i]).fadeOut(777);
                    }
                }
            }
        }
    })

    // Not need in this time.
    $("button").click(function() {
        alert(numOfArticle);
        // var boxes = $('input[type="checkbox"]');
        // if (boxes.length > 0) {
        //     boxes.each(function() {
        //         if ($(this).prop('checked')) {
        //             $("." + $(this).val()).fadeIn(777);
        //         } else {
        //             $("." + $(this).val()).fadeOut(777);
        //         }
        //     })
        // }
    });

    $(".checkbox").hover(function() {
        $(this).css("color", "#cf8a05");
        var category = $(this).text().trim().toLowerCase();
        $("." + category).css("color", "#cf8a05");
        $("." + category + " p").css("color", "#cf8a05");
    },
    function() {
        $(this).css("color", "#000");
        var category = $(this).text().trim().toLowerCase();
        $("." + category).css("color", "#000");
        $("." + category + " p").css("color", "#000");
    });
});
