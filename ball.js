class Ball{
    constructor(){
        var options = {
            isStatic: false,
            restitution: 0.1,
            friction: 0.2,
            density: 1,
            collisionFilter: {category: 1, mask: 4294967295, group: -1}
        }
        this.body = Matter.Bodies.circle(100,200,20,options);
        
        this.Image=loadImage("sprites/paper.png");
        
        World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
        imageMode(CENTER);
        fill("white");
        image(this.Image,pos.x,pos.y,50,50);
      }
}