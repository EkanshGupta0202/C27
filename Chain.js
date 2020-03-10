class Chain{
    constructor(bodyA,bodyB){
    var chain_options={
        bodyA: bodyA,
         bodyB: bodyB,
         length: 370,
         stiffness:0.4,
         //damping:0.04
       
    }
    this.chain = Constraint.create(chain_options);
    World.add(world,this.chain)
    }
    display(){
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position;
        strokeWeight(10);
        stroke("blue");
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}