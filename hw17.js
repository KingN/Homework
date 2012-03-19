/** nel file f.js ci sono tutte le funzioni già fatte*/


/** funzione apply che applica la funzione situata nel primo elemneto dell'array al secondo elemento dell'array
*/

var apply = function(argumentArray) {
	return argumentArray[0](argumentArray[1]);
};

/** funzione aa applica la funzione data ad ogni elemento dell'argumentArray*/

var aa = function (fun){
	return function(array){
		return array.map(fun);
	};
};

/*fun comp2  ritorna la composizione di 2 funzioni */

var comp2 = function (functions){
	var f = functions[0];
	var g = functions[1];
	return function (x){
		return f(g(x));
	};
};

/* fun comp composizione di n funzioni */
var comp = function (functions){
	return functions.reduce(function(f,g){
		return function (x){
			return f(g(x));
		};
	});
};
