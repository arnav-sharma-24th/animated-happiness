class Umbrella{
    constructor(x,y,r){
        var options={
        isStatic : true
        
        }
        this.image = loadImage("Walking Frame/walking_1.png")
        this.body = Bodies.circle(20,20,20);
        this.x = x;
        this.y = y;
        this.r =r;
        World.add(world, this.body);
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0,this.r);
        pop();
      }        
}