// function myFunction() {
//     document.getElementById("name").style.display = "none";
// }
//
// function hideByClassName(className) {
//     var elements = document.getElementsByClassName(className.toLowerCase());
//     // elements[0].style.display = "none";
//     for (var i = 0; i < elements.length; i++) {
//         elements[i].style.display = "none";
//         alert(elements[i].getAttribute("class"));
//     }
//     alert("Done!");
// }

// function change(className) {
//     var elements = document.getElementsByClassName(className.toLowerCase());
//     for (var i = 0; i < elements.length; i++) {
//         if (document.getElementById(className).checked) {
//             elements[i].style.display = "block";
//         } else {
//             elements[i].style.display = "none";
//         }
//     }
// }

$(document).ready(function() {
    $("button").click(function() {
        // var checked = $('input[type="checkbox"]:checked');
        // if (checked.length > 0) {
        //     checked.each(function() {
        //         // alert("." + $(this).val());
        //         $("." + $(this).val()).show();
        //     })
        // }

        // var unchecked = $('input[type="checkbox"]'.prop("checked") == false) {
        //     alert(unchecked.length);
        // }
        var boxes = $('input[type="checkbox"]');
        if (boxes.length > 0) {
            boxes.each(function() {
                if ($(this).prop('checked')) {
                    $("." + $(this).val()).show(777);
                } else {
                    $("." + $(this).val()).hide(777);
                }
            })
        }
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
