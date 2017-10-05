var text = document.getElementById("lolp");
var smaller_text = document.getElementById("smaller_lolp");
var even_smaller_text = document.getElementById("even_smaller_lolp");
var error_text = document.getElementById("error");
var mainbody = document.getElementById('bodybaby');



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


  // create a simple instance
  // by default, it only adds horizontal recognizers
  var mc = new Hammer(mainbody);

  // listen to events...
  mc.on("panleft panright tap press", function(ev) {
      error_text.innerHTML=ev.type;
  });
}
