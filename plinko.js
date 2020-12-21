class Plinko {
    constructor(x,y,radius) {
      var options = {
          isStatic: true
      }
      this.radius=radius;
    // this.width = width;
     //this.height = height;
      this.x=x
      this.y=y
      
      this.body = Bodies.rectangle(this.x,this.y,this.radius,options);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      //rectMode(CENTER);
      fill("white");
      ellipse(pos.x, pos.y,20);
    }
  };