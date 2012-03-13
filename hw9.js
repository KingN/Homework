/* creazione di una classe Line che rappresenta l'equazione parametrica ax+bxy+c*/

var Line = function(a,b,c){
	// se l'utente si dimentica il new
  if(!(this.instanceof Line)){
    return new Line(a,b,c);
	}
	
	this.a = a || 1;
	this.b = b || 1;
	this.c = c || 1;
};