var bird;
var pipes = [];
var game = false;

function setup() {
  createCanvas(400, 600);
  // pipes.push(new Pipe());
  bird = new Bird();
  score = new Score()
  button = createButton("START");
  button.position(185,200)
  button.mousePressed(gameStart)

}

function draw() {
  background(0);

  if (!game) {
    var bestText= text(score.bestReult(), 185, 100)
  }

  var resultText= text(score.result(), 185, 150)

  for (var i = pipes.length-1; i >= 0; i--) {
    pipes[i].show();
    pipes[i].update();

    if (pipes[i].offscreen()) {
      pipes.splice(i, 1);
      score.add()
    }

    if (pipes[i].hits(bird)) {
      resetSektch()
    }
  }


 if (game){
   bird.update();
   bird.show();

  if (frameCount % 70 == 0) {
    pipes.push(new Pipe());
  }
}

}

function keyPressed() {
  if (key == ' ' && game) {
    bird.up();
    //console.log("SPACE");
  }
}

function mousePressed() {
  if (game) {
    bird.up();
  }
}

function resetSektch() {
  bird = new Bird();
  pipes = []
  game = false
  button.show();
  score.cal();
}

function gameStart() {
  button.hide();
  game = true
  score.reset();
}

function Score() {
  this.score = 0
  this.best = 0

  this.bestReult = function(){
    return "Best: " + this.best.toString();
  }
  this.result = function(){
    return "Scores: " + this.score.toString();
  }


  this.cal = function(){
    if (this.score > this.best) {
      this.best = this.score
    }
  }
  this.add = function() {
    this.score ++
    console.log(this.score)
  }

  this.reset = function() {
    this.score = 0;
  }
}
