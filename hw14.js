/* * Refactoring della classe Triangle affinchè i tre vertici vengano memorizzati in un'array 
chiamato points  */

var Triangle = function (p1,p2,p3){
	this.points = [p1,p2,p3];
}
Triangle.prototype.above = function(line) {

  return this.points.every(function (point) {
    return point.getDistance > 0;
  });
};

Triangle.prototype.below = function(line) {

  return this.points.every(function (point) {
    return point.getDistance < 0;
  });
};

Triangle.prototype.intersect = function(line) {

  return (this.above(line) || this.below.line)) ? false : true;
};
