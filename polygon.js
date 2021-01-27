class Polygon{
    constructor(x, y, radius) {
         var options = {
             
           
           restitution:0.3,
             friction:0.5,
             density:1
         }
         this.body = Bodies.circle(x, y, radius, options);
         this.width = radius;
         this.height = radius;

         this.image = loadImage("polygon.png");
 
         
         
         
         World.add(world, this.body);
       }
       display(){   

         imageMode(CENTER);
         image(this.image, this.body.position.x, this.body.position.y, 60, 60);
 
        
         
       }
     }