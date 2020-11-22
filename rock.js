class rock{
    constructor(){
        var options={
            restitution:0.5
        }
        this.body=Bodies.circle(145,465,20,options)
        this.image=loadImage("stone.png")
        World.add(world,this.body)
    }
    display(){
        var pos=this.body.position
        imageMode(CENTER)
        image (this.image,pos.x,pos.y,40,40)
    }
}