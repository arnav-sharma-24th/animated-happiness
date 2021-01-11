class createDrop{
constructor(x,y,r){
var options={
'restitution': 0.5,
'friction': 0,
'density':1

}
this.body = Bodies.circle(20,20,20)
this.x = x;
this.y = y;
this.r = r;
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