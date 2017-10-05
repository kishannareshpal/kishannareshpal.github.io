var text = document.getElementById("lolp");
var smaller_text = document.getElementById("smaller_lolp");
var even_smaller_text = document.getElementById("even_smaller_lolp");
var error_text = document.getElementById("error");
var mainbody = document.getElementById('bodybaby');



function setup() {
  createCanvas(screen.width, screen.height);
}

function draw() {
  ellipse(mouseX, mouseY, 80, 80);
  error_text.innerHTML=pAccelerationX;
}
