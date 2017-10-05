var text = document.getElementById("lolp");
var smaller_text = document.getElementById("smaller_lolp");
var even_smaller_text = document.getElementById("even_smaller_lolp");
var error_text = document.getElementById("error");
var mainbody = document.getElementById('bodybaby');


var colors = [
        "rgb(13, 36, 97)", //darkblue
        "rgb(23, 23, 54)", //evendarkerblue
        "rgb(242, 242, 242)", //whiter_orangey
        "rgb(12, 126, 23)" //green
  ];



function setup() {
  createCanvas(screen.width, screen.height);
}

function draw() {
  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(255);
  }
  ellipse(mouseX, mouseY, 80, 80);
}
