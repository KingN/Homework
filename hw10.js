/* metodo getDistanceFromLine che prende in input una Line e ritorna */
/* la distanza del punto dalla linea*/

Point.prototype.getDistanceFromLine = function(line) {
	var num = line.a * this.x + line.b * this.y + line.c;
	var den = sqrt(pow(line.a,2) + pow(line.b,2);
		return num / den;
}