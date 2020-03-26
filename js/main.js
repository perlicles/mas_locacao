//Get the modal
var modal = document.getElementById("myModal");

//Get the image and insert it inside the modal - use its "alt" text as a caption
var img;
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

function reply_click(clicked_id) {
    img = document.getElementById(clicked_id);
    modal.style.display = "block";
    modalImg.src = img.src;
    captionText.innerHTML = img.alt;
}

// Get the <span> elemtn that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

var myButtonTel = document.getElementById("myBtnTel");
var myButtonWhats = document.getElementById("myBtnWhats");

// When the user scrolls down 20px from the top of the document, show the button 
window.onscroll = function () { scrollFunction(); navShadownOnScroll(); };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        myButtonTel.style.display = "block";
        myButtonWhats.style.display = "block";

    } else {
        myButtonTel.style.display = "none";
        myButtonWhats.style.display = "none";
    }
}

var navBar = document.getElementById('header');

function navShadownOnScroll() {
    if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
        navBar.classList.add('shadow-box');
    } else {
        navBar.classList.remove('shadow-box');
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}