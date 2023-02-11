function readmore(id,blogDataId,blogMoreDataId) {
    var dots = document.getElementById(blogDataId);
    var moreText = document.getElementById(blogMoreDataId);
    var btnText = document.getElementById(id);
      
    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}


function read(id) {
    var btnText = document.getElementById(id);
      
    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "less";
        moreText.style.display = "inline";
    }
}

