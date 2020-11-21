class Paper{
    constructor(x,y,r){
        var options={
            isStatic:false,
            restitution:0.2,
            friction:0.5,
            density:1.2
        }
        this.x=x;
        this.y=y;
        this.r=r

        this.body = Bodies.circle(this.x,this.y,this.r/2,options)
        //this.image=loadImage("paper.png")
        World.add(world,this.body)
       
    }
    display(){
        var paperPos=this.body.position;
        push()
        translate (paperPos.x,paperPos.y)
        fill ("purple")
        ellipseMode(RADIUS);
       ellipse(0,0,this.r,this.r);
       pop ()

    }
}
