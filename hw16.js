/* versione finale con export selettivo*/
!(function (exports) {


var sqrt = Math.sqrt;
var pow = Math.pow;
var random = Math.random;

/* POINT */

exports.Point = function (x, y) {
  this.x = x || 0;
  this.y = y || 0;
}

Point.prototype.getDistanceFromPoint = function(point) {
  return sqrt(pow(point.y - this.y, 2) + pow(point.x - this.y, 2));
};

Point.prototype.translate = function(dx, dy) {
  this.x += dx;
  this.y += dy;

  return this;
};


Point.prototype.pointMembership = function(equation) {
  var value = equation(this.x, this.y);

  if (value > 0) {
    return 1;
  }

  if (value < 0) {
    return -1;
  }

  return 0;
}

Point.prototype.getDistanceFromLine = function(line) {

  var module = line.a*this.x+line.b*this.y+line.c;
  var sqrt = Math.sqrt(Math.pow(line.a, 2)+Math.pow(line.b, 2));

  return module/sqrt;
};

Point.prototype.getDistance = function(x) {
  if(x instanceof Point) {
    return this.getDistanceFromPoint(x);
  }

  if(x instanceof Line) {
    return this.getDistanceFromLine(x);
  }

  throw new Error('x is not a Point nor a Line');
};

exports.Line = function (a, b, c) {
  //comodo se l'utente si dimentica di usare new
  if(!(this instanceof Line)) {
    return new Line(a, b, c);
  }

  this.a = a;
  this.b = b;
  this.c = c;
}

/* TRIANGLE */

exports.Triangle = function (p1, p2, p3) {

  this.points = [p1, p2, p3];

  this.l1 = p2.getDistance(p3);
  this.l2 = p3.getDistance(p1);
  this.l3 = p1.getDistance(p2);
}

Triangle.prototype.getPerimeter = function() {
  return this.l1 + this.l2 + this.l3;
};

Triangle.prototype.getArea = function() {
  var p = this.getPerimeter() / 2;

  return sqrt(p*(p - this.l1)*(p - this.l2)*(p - this.l3));
};

Triangle.prototype.above = function(line) {

  return this.points.every(function (point) {
    return point.getDistance > 0;
  })

};

Triangle.prototype.below = function(line) {

  return this.points.every(function (point) {
    return point.getDistance < 0;
  })

};

Triangle.prototype.intersect = function(line) {

  return (this.above(line) || this.below.line)) ? false : true;

};


exports.randomPoint = function () {
  var x1 = random() * 200 - 100;
  var y1 = random() * 200 - 100;
  
  return new Point(x1, y1);
};

exports.randomPoints = function (n) {
  var n = n || 1;
  var res = new Array(n);

  for (var i = 0; i < n ; i += 1) {
    res[i] = randomPoint();
  }

  return res;
}

var points = randomPoints(100);

function SemipianoPositivo(point) {
	return point.x < point.y;
}

exports.FiltraSemipianoPositivo = function(array) {
	return array.filter(function(point) {
		return SemipianoPositivo(point);
	});
}

exports.Quad = function (p1, p2, p3, p4) {
  this.points = [p1, p2, p3, p4];
};

Quad.prototype.above = Triangle.prototype.above;

Quad.prototype.below = Triangle.prototype.below;

Quad.prototype.intersect = Triangle.prototype.intersect;


}(this))
