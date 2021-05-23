var modal = document.getElementById('testModal');

var img = document.getElementById('myImg');
var modalImg = document.getElementById("thumbimg");
img.onclick = function () {
    modal.style.display = "block";
    modalImg.src = image.src;
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function () {
    modal.style.display = "none";
}