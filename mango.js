class mango{
    constructor(x,y){
        var options={
            isStatic:true,
            restiution:0.5
        }
        this.body=Bodies.circle(x,y,25,options)
        this.image=loadImage("mango.png")
        World.add(world,this.body)
       
    }
    display(){
       
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, 50, 50);
        pop();
    }
}