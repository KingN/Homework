/* creazione di tre metodi della classe Triangle (above,below, intersect)*/
/* che prendono in input una Line e ritornano true rispettivamente se i triangolo */
/* è sopra,sotto,intersecato alla retta.*/

Triangle.prototype.above = function(line) {
	return this.p1.membership(line) + this.p2.membership(line) + this.p3.membership(line) === 3;
};

Triangle.prototype.below = function(line){
  return this.p1.membership(line) + this.p2.membership(line) + this.p3.membership(line) === - 3; 
};

Triangle.prototype.below = function(line){
  var result = this.p1.membership(line) + this.p2.membership(line) + this.p3.membership(line)
  return  result < 3 && result > -3; 
};