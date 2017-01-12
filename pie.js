function Pipe() {


  var gap = random(100, height/3)
  var divideA = random(0.1, 0.9);
  var divideB = 1 - divideA



  // function(this.top, this.bottom){
  //   randomTotal = this.top + this.bottom
  // }

  this.top = (height - gap) * divideA;
  this.bottom = (height - gap) * divideB;
  this.x = width;
  this.w = 70;
  this.speed = 3;

  this.hightlight = false;

  this.hits = function(bird) {
    if (bird.y < this.top || bird.y > height - this.bottom) {
      if (bird.x > this.x && bird.x < this.x + this.w ) {
        this.hightlight = true;
        return true;
      }
    }
    this.hightlight = false;
    return false;
  }

  this.show = function(){
    fill(255);
    if (this.hightlight) {
      fill(255, 0, 0);
    }
    rect(this.x, 0, this.w, this.top);
    rect(this.x, height-this.bottom , this.w, this.bottom);
  }

  this.update = function() {
    this.x -= this.speed
  }

  this.offscreen = function() {
    return this.x < -this.w
  }


}
