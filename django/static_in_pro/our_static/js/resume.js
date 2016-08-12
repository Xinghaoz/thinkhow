// document.getElementById("name").style.display="none";
// checks = document.getElementsByClassName("checkbox")
// for (var i = 0; i < checks.length; i++) {
//     children = checks[i].children;
//     alert(children[0].innerHTML);
// }

function myFunction() {
    // document.getElementById("name").innerHTML = "Paragraph changed.";
    document.getElementById("name").style.display = "none";
}

function hideByClassName(className) {
    var elements = document.getElementsByClassName(className.toLowerCase());
    // elements[0].style.display = "none";
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.display = "none";
        alert(elements[i].getAttribute("class"));
    }
    alert("Done!");
}

function change(className) {
    var elements = document.getElementsByClassName(className.toLowerCase());
    for (var i = 0; i < elements.length; i++) {
        if (document.getElementById(className).checked) {
            elements[i].style.display = "block";
        } else {
            elements[i].style.display = "none";
        }
    }
}
