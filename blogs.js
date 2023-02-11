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

let loadMoreBtn = document.querySelector('#load-more-btn');
let currentItem = 3;

loadMoreBtn.onclick = () => {
    let boxes = [...document.querySelectorAll('.card .card-body')];

    for (var i = currentItem; i < currentItem + 3; i++) {
        boxes[i].style.display = "inline-block";
    }

    currentItem += 3;

    if (currentItem >= boxes.length) {
        loadMoreBtn.style.display = "none"
    }

}