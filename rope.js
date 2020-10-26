class Rope {
    constructor(body1,body2, OffsetX, OffsetY){
        this.OffsetX=OffsetX
        this.OffsetY=OffsetY
        var options = { 
         bodyA: body1,
         bodyB: body2,
         pointB:{X:this.OffsetX, y:this.OffsetY}
        }
        this.rope=Constraint.create(options);
        World.add(world,this.rope);
    }
    display() {
    var pointA = this.rope.bodyA.position;
    var pointB = this.rope.bodyB.position;
    strokeWeight(4);
    line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}