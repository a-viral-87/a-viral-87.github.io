document.addEventListener("DOMContentLoaded", function () {
    loadComments();
});

function postComment() {
    var commentText = document.getElementById("comment-text").value;

    if (commentText.trim() === "") {
        alert("Please enter a comment before posting.");
        return;
    }
    saveComment(commentText);

    loadComments();

    document.getElementById("comment-text").value = "";
}

function saveComment(commentText) {
    var existingComments = JSON.parse(localStorage.getItem("comments")) || [];

    existingComments.push(commentText);

    localStorage.setItem("comments", JSON.stringify(existingComments));
}

function loadComments() {
    var existingComments = JSON.parse(localStorage.getItem("comments")) || [];

    var commentsContainer = document.getElementById("comments-container");

    commentsContainer.innerHTML = "";

    existingComments.forEach(function (commentText) {
        var newComment = document.createElement("div");
        newComment.className = "comment";
        newComment.textContent = commentText;
        commentsContainer.appendChild(newComment);
    });
}

document.addEventListener("DOMContentLoaded", function () {
    loadLikes();
});

function incrementLikes() {
    var likeCount = parseInt(localStorage.getItem("likeCount")) || 0;

    likeCount++;

    localStorage.setItem("likeCount", likeCount);

    displayLikes(likeCount);
}

function loadLikes() {
    var likeCount = parseInt(localStorage.getItem("likeCount")) || 0;

    displayLikes(likeCount);
}

function displayLikes(likeCount) {
    document.getElementById("like-count").textContent = likeCount;
}
