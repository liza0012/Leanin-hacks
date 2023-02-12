/*function readmore(id,blogDataId,blogMoreDataId) {
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

}*/
let loadMoreBtn = document.querySelector('#load-more-btn');
let currentItem = 3;

loadMoreBtn.onclick = () => {
    let boxes = [...document.querySelectorAll('.container-9 .box-container')];

    for (var i = currentItem; i < currentItem + 3; i++) {
        boxes[i].style.display = "inline-block";
    }

    currentItem += 3;

    if (currentItem >= boxes.length) {
        loadMoreBtn.style.display = "none"
    }

}

/*function readmore() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
      
    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}*/


// Download the helper library from https://www.twilio.com/docs/node/install
// Set environment variables for your credentials
// Read more at http://twil.io/secure
/*const accountSid = "ACcff6e515fb27ef9d886865d6df1c3b97";
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);

client.calls.create({
  url: "http://demo.twilio.com/docs/voice.xml",
  to: "+917053337811",
  from: "+13854328270",
})
.then(call => console.log(call.sid));

const client=require('twilio')();
client.message.create*/
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


