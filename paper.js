class Paper
{
    constructor(x,y,r)
    {
        var options = {
            restitution: 0.3,
            friction: 0,
            density: 1.2
        }

        this.x = x;
        this.y = y;
        this.r = r;
        this.body = Bodies.circle( x, y, r, options);
        this.image = loadImage("paper.png");

        World.add(world,this.body);
    }
    display()
	{
         var angle = this.body.angle;
			var pos=this.body.position;		
			push()
			translate(pos.x, pos.y);
            rotate(angle);
            imageMode(CENTER);
            //image(this.image, 0, 0, this.r);
            ellipseMode(RADIUS);
            ellipse(0,0,this.r,this.r);
			pop()
	}

}