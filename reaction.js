
var start;

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function move() {
    var left = Math.random() * 300;
    var top = Math.random() * 300;
    var wh = Math.random() * 200 + 100;

    var shape = document.getElementById("shape");
    shape.style.left = left + "px";
    shape.style.top = top + "px";
    shape.style.width = wh + "px";
    shape.style.height = wh + "px";
    shape.style.display = "block";
    shape.style.backgroundColor = getRandomColor();

    start = new Date().getTime();
}

move();

document.getElementById("shape").onclick = function () {
    var end = new Date().getTime();
    var timeTaken = (end - start) / 1000;
    alert("Your reaction time: " + timeTaken + " seconds");

    this.style.display = "none";
    move();
}
