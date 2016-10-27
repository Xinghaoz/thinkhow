var last_post_modify_time = 0;
var last_comment_modify_time = 0;

$('#post-form').on('submit', function(event) {
    var content = $("#post-text")
    event.preventDefault(); // Prevent form from being submitted
    $.ajax({
        type: "POST",
        url: "/grumblr/post/",
        data: {
            text: content.val(),
        },
        success: function(data) {
            alert("You've added a new post!");
        },
    });
});

function createComment(from_epoch) {
    console.log("create comment");
    var list = $("<div></div>", {id: "post-comment" + from_epoch});
    var content = $("<div></div>", {class: "content"});
    var comments = $("<div></div>", {class: "comments"});
    var editor = $("<div></div>", {class: "editor"});
    var header = $("<div></div>", {class: "editor-header"});
    var role1 = $("<a></a>", {"data-role":"bold"}).text("B");
    var role2 = $("<a></a>", {"data-role":"italic"}).text("I");
    var role3 = $("<a></a>", {"data-role":"underline"}).text("U");

    var input = $("<input>", {id: from_epoch + "i", class:"comment-input", type:"text", name: "comment"});
    var insert = $("<div></div>", {class:"insert-text"});
    var span1 = $("<span></span>", {class:"loading"}).text("Loading...");
    var p1 = $("<p></p>");
    var submit = $("<input>", {id: from_epoch, class:"btn btn-primary comment-btn", type:"submit", value:"Comment"});
    submit.click(submitComment);
    header.append(role1);
    header.append(role2);
    header.append(role3);
    editor.append(header);
    editor.append(input);
    insert.append(span1);
    p1.append(submit);
    insert.append(p1);
    comments.append(editor);
    comments.append(insert);
    content.append(comments);
    list.append(content);
    return list;
}

function submitComment() {
    var comment_id = $(this).attr('id');
    var comment = $("#" + comment_id + "i").val();

    if (comment == "") {
        return;
    }
    console.log("You've add a comment!");
    $.ajax({
        type: "POST",
        url: "/grumblr/add-comment/",
        data: {
            "comment_id": comment_id,
            "comment": comment
        },
        success: function(data) {
            alert("You've add a comment!");
        },
    });
}

function updatePost() {
    return $.ajax({
        type: "GET",
        url: "/grumblr/get-posts/" + last_post_modify_time,
        success: function(data) {
            var list = $("#post-list");
            for (var i = 0; i < data.posts.length; i++) {
                item = data.posts[i];
                var post_wrapper = $("<div></div>", {class: "post-wrapper"});
                var header = $("<p></p>", {class: "post-author"});
                var profile_link = $("<a></a>", {class: "profile-link", href: "/profile/" + item.username, target: "_blank"}).text(item.username);
                var date = $("<span></span>", {class: "post-date"}).text(item.timestamp);
                var content = $("<div></div>", {class: "post-content"}).text(item.text);
                var icon = $("<i></i>", {class: "fa fa-heart", "aria-hidden": "true"});
                var likes = $("<p></p>").text(item.likes);

                post_wrapper.append($('<img>', {class: 'photo', src: '/photo/' + item.username}))
                header.append(profile_link);
                header.append(date);
                post_wrapper.append(header);
                post_wrapper.append(content);
                post_wrapper.append(icon);
                post_wrapper.append(likes);

                var comment_list = createComment(item.from_epoch);
                console.log(comment_list);

                post_wrapper.append(comment_list);
                list.prepend(post_wrapper);
                last_post_modify_time = item.from_epoch;
                }
            },
            complete: function(event) {
                updateComment();
            }
      });
}

function updateComment() {
    // console.log(last_comment_modify_time);
    return $.ajax({
        type: "GET",
        url: "/grumblr/get-comments/" + last_comment_modify_time,
        success: function(comments) {
            for (var j = 0; j < comments.comments.length; j++) {
                comment = comments.comments[j];
                var comment_list = $("#post-comment" + comment.comment_id);
                console.log("content = " + comment.comment + "\t" + comment_list);

                var comment_container = $("<div></div>", {class: "comment-container"});
                var comment_photo = $('<img>', {class: 'comment-photo', src: '/photo/' + comment.author})
                var comment_link = $("<a></a>", {class: "profile-link", href: "/profile/" + comment.author, target: "_blank"}).text(comment.author);
                var comment_author = $("<p></p>", {class: "post-author"});
                var comment_date = $("<span></span>", {class: "post-date"}).text(comment.timestamp);
                var comment_comment = $("<p></p>").text(comment.comment);
                comment_author.append(comment_link);
                comment_author.append(comment_date);
                comment_container.append(comment_photo);
                comment_container.append(comment_author);
                comment_container.append(comment_comment);
                comment_list.prepend(comment_container);

                last_comment_modify_time = comment.from_epoch;
            }
        },
    });
}

$(document).ready(function () {

  // Set up to-do list with initial DB items and DOM data
  last_post_modify_time = 0;

  updatePost();

  // Periodically refresh to-do list
  window.setInterval(updatePost, 5000);

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
});
