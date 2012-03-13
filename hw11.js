/* refactoring di getDistanceFromLine tale che ritorni la distanza comprensiva di segno(il segno indica in quale semipiano si trova)*/

Point.prototype.getDistanceFromLine = function(line){
  var num = Math.abs(line.a * this.x + line.b * this.y + line.c);
  var den = sqrt(Math.pow(line.a,2) + Math.pow(line.b,2));
  return num / den;
};

