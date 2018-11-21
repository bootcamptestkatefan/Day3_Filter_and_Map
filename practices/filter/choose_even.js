'use strict';

/*function choose_even(collection) {

  	var result = [];
  	for (var i = 0; i < collection.length; i++){
   		if(collection[i]%2==0){
  				result.push(collection[i]);
  		}
  	}
    return result;
}
*/

function choose_even(collection) {

  	var result = [];
  	for (var i = 0; i < collection.length; i++){
   		if(isEven(collection[i])){
  				result.push(collection[i]);
  		}
  	}
    return result;
}

function isEven(number){
  if (number%2==0){
    return true;
  }
  else {
    return false;
  }
}



module.exports = choose_even;
