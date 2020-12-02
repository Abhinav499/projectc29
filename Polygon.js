class Polygon {
  constructor(x,y,radius){
    var options = {
      isStatic : false,
      'density': 0.8,
      'friction': 1
    }
    this.body = Bodies.circle(x,y,radius,options);
    this.radius = 50;

    this.image = loadImage("polygon.png");

    World.add(world, this.body);
    Matter .Body.setDensity(this.body,5);
  }

  display() {
  var pos = this.body.position;
  push ();
  imageMode(CENTER);
  image(this.image,pos.x,pos.y,this.radius,this.radius);
    pop ();
  }
}
