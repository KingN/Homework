/*metodo membership che prende om input una punzione con questa signature (x,y){...}*/
/* che rappresenta una retta) e ritorna 1 se il punto è sopra, 0 se giace sulla retta e -1 se è sotto.*/


Point.prototype.membership = function(funzioneRetta){
	var value = funzioneRetta(this.x,this.y);
	if (value > 0){
		return 1;
	};
	if (value < 0){
		return -1;
	};
	return 0;
};