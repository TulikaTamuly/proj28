class tree{
    constructor(){
        this.image=loadImage("tree.png")
        
    }
    display(){
        imageMode(CENTER)
        image (this.image,600,400,500,500)
    }
}