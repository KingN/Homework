//rename di getDistance in getDistanceFromPoint

Point.prototype.getDistanceFromPoint = function(point) {
  return sqrt(pow(point.y - this.y, 2) + pow(point.x - this.y, 2));
};