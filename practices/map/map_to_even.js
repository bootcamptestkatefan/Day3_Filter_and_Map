'use strict';
/*
  function map_to_even(collection){
  for (var i = 0 ; i < collection.length ; i ++){
    collection[i] = collection[i]*2
    }

  return collection;
  }
*/

function doMapToEven(collection , aFunctionThatYouWantToExecute){
  for (var i = 0 ; i < collection.length ; i ++){
    collection[i] = aFunctionThatYouWantToExecute(collection[i]);
    }
  return collection;
}

const times2 = function (number){
  return number*2
}

function map_to_even(element){
  return doMapToEven(element, times2);
}

module.exports = map_to_even;
