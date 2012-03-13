/* classe Quad quadrato con metodi simili a Triangle */

var Quad = Function (p1,p2,p3,p4){
	this.points = [p1, p2, p3, p4];
};

Quad.prototype.above = Triangle.prototype.above;

Quad.prototype.below = Triangle.prototype.below;

Quad.prototype.intersect = Triangle.prototype.intersect;


