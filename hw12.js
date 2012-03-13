/* metodo getDistance che controlla il tipo dell'input ed esegue il metodo relativo alla classe di appartenenza */
/* altrimenti crea un eccezione */

Point.prototype.getDistance = function(object) {
	if (object istanceof Point){
		return this.getDistanceFromPoint(object);
	};
	if (object istanceof Line){
		return this.getDistanceFromLine(object);
	};
	throw new Error('object not a Point or Line');
};	
