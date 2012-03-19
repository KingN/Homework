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

/* fun cons applica ogni funzione ad un valore e restituisce l'array delle funzioni applicate all'elemento*/
var cons = function (functions){
	return function(x){
		return functions.map(function (f){
			return f(x);
		});
	};	
};

/* fun distl che distribuisce un elemento passato nell'array il tutto è passato in un unico array */
 var distl = function(array2){
 	var value = array2[0];
 	var array = array2[1];
 	return array.map(function (item){
 		return [value,item];
 	});
 };

/*fun trans che traspone una matrice*/

var trans = function(matrix){
	var result = [];
    matrix.forEach(function (row, i) {
      row.forEach(function (value, j) {
        (result[j] = result[j] || [])[i] = value;
      });
    });
    return result;
  };
}