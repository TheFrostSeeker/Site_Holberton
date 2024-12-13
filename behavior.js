document.addEventListener("DOMContentLoaded", function(event) {
    var thumbnailElement = document.getElementById("smart_thumbnail");

    thumbnailElement.addEventListener("click", function() {
        if (thumbnailElement.className === "small") {
            thumbnailElement.style.width = "768px";
            thumbnailElement.style.height = "512px";
            thumbnailElement.className = "";
        } else {
            thumbnailElement.style.width = "154px";
            thumbnailElement.style.height = "102px";
            thumbnailElement.className = "small";
        }
    });
});

