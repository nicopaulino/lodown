'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;


/**
 * identity: 
 * 
 * Returns the value unchanged.
 * 
 * @param {Any Value} value: Any value.
 * @return {Any Value}: The value argument.
 */

function identity(value) {
    return value;
}
module.exports.identity = identity;

/**
 * typeOf: 
 * 
 * Returns the data type of the value as a string.
 * 
 * @param {Any Value} value: Any value.
 * @return {String}: Returns of string of the datatype the value is.
 */
 
 function typeOf(value) {
     if (Array.isArray(value)) {
       return "array"; 
   } else if (value === undefined) {
         return "undefined";
   } else if (value === null) { 
       return "null"; 
   } else if (typeof(value) === "object" && value instanceof Date) {
       return "date";
   } else if (typeof(value) === "object") {
       return "object";
     } else return typeof(value);
}

 module.exports.typeOf = typeOf;
 
 /**
  * first:
  * 
  * Return's the first indices of an an array. If the first argument isn't an array or if the number argument is negative, 
  * it will return an empty array. If the number argument is longer than the length of the array it will return the whole 
  * array. If the number argument is not a number it will return the first index of the array.
  * 
  * @param {Array} array: Any array.
  * @param {Number} num: A number. This will determine how many indices are returned.
  * @return {Array} result: Returns the first indices of the array, how many depending on what the num argument is.
  */
  
function first(array, num) {
    let result = [];
    if (Array.isArray(array) == false || num < 0) {
        return result;
    } else if (isNaN(num)) {
        return array[0];
    } else if (num > array.length - 1) {
        return array;
    } else for (let i = 0; i < num; i++) {
        result.push(array[i]);
    } return result;
}

 module.exports.first = first;
 
/**
 * last: 
 * 
 * Returns the last indices of an array. If the first argument  * isn't an array or if the number argument is negative, it
 *  will return an empty array. If the number argument is longer than the length of the array it will return the whole array. If the number argument is not a number it will return the first index of the array.
 * 
 * @param {Array} array: Any number.
 * @param {Number} num: A number. This will determine how many indices are returned.
 * @return {Array} newResult: Returns the last indices of the array, how many depending on what the num argument is.
 */
 
function last(array, num) {
let result = [];
let newResult = [];
if (Array.isArray(array) == false || num < 0) {
        return result;
    } else if (isNaN(num)) {
        return array[array.length - 1];
    } else if (num > array.length - 1) {
        return array;
    } else {
        for (let i = array.length -1; i >= 0; i--) {
        result.push(array[i]);
    } for (let x = 0; x < num; x++) {
        newResult.unshift(result[x]);
    } return newResult;
        
    }
}

 module.exports.last = last;

/**
 * indexOf:
 * 
 * Returns the first index where the value is included in an array. If the value is in the array in multiple places, it will return the first occurence. If the value is not present at all it will return -1.
 * 
 * @param {Array} array: An array containing values
 * @param {Any Value} value: The value that will be checked to see if it's in the array.
 * @return {number} Either returns the index of the first occurence of the value or returns -1 if value is not present.
 */ 
 
function indexOf(array, value) {
     for (let i = 0; i < array.length; i++) {
         if (array[i].includes(value) ) {
             return i;
         }
     } return -1;
 }
 module.exports.indexOf = indexOf;
 
 /**
  * contains:
  * 
  * Returns a boolean value depending on if a value is included in an array
  * 
  * @param {Array} array: Any array.
  * @param {Any Value} value: The value that will be checked to see if it's in the array.
  * @return {Boolean}: Return either true or false depending on if the value is in the array.
  */ 
  
function contains(array, value) {
         if (array.includes(value)) {
             return true;
         } else {
             return false;
         }
}

   module.exports.contains = contains; 
   
/**
 * unique:
 * 
 * Returns a new array with all the duplicates removed.
 * 
 * @param {Array} array: Any array.
 * @return: {Array}: Returns a new array with all the same values as the array argument except the duplicates are removed.
 */ 
 
function unique(array) {
    let unique = [...new Set(array)];
    return unique;
}

module.exports.unique = unique;

/**
 * filter:
 * 
 * Runs every value in a collection in a function. Returns an array with all the values that returned true.
 * 
 * @param {Array or Object} collection: An array or object as collection.
 * @param {Function} test: A function that will be ran through every value, index, and collection.
 * @return: {Array}: An array with all the values in the collection that returned true when ran through the function.
 */ 

function filter(collection, test) {
    var filtered = [];
    each(collection, function (value, index, collection) {
        if (test(value,index,collection)) {
            filtered.push(value);
        }
    });
    return filtered;
}

module.exports.filter = filter;

/**
 * reject:
 * 
 * Runs every value in a collection in a function. Returns an array with all the values that returned false.
 * 
 * @param {Array or Object} collection: An array or object as collection.
 * @param {Function} test:  A function that will be ran through every value, index, and collection.
 * @return {Array}: An array with all the values in the collection that returned false when ran through the function.
 */
 
function reject(collection, test) {
    var newArr = filter(collection, test);
    var rejectArr = [];
    each(collection, function(e, i, a) {
        if (newArr.includes(e)) {}
        else {rejectArr.push(e)}
    });
    return rejectArr;
}
 
 module.exports.reject = reject;
 
/**
 * partition:
 * 
 * Runs every value in a collection through a function, then returns an array with two subarrays: 
 * one with all the values that returned true and one with all the values that returned false.
 * 
 * @param {Array or Object} collection: An array or object as collection.
 * @param {Function} funct: A function that will run through every value in the collection.
 * @return {Array}: An array with two subarrays. One has every value that returned true and the other 
 * has all the values that returned false.
 *
 */
 
 function partition(collection, funct) {
    var fail = [];
    var pass = collection.filter((element, index, arr) => {
        if (funct(element, index, arr))
        return true;
        fail.push(element);
    });
}

module.exports.partition = partition;

/**
 * map:
 * 
 * Runs a function through every value in a collection and returns an array with all the altered values.
 * 
 * @param {Array or Object} collection: An array or object as collection.
 * @param {Function} action: A function that will be run through every value.
 * @return {Array}: A new array with all of the new values that have been changed by the function argument.
 */
 
 function map(collection, action) {
    var mapped = [];
    each(collection, function(element, index, collection) {
      mapped.push(action(element, index, collection));
    });
    return mapped;
}

module.exports.map = map;

/**
 * pluck:
 *
 * Checks to see if a key exists in an object. If it does, it will return all of the values in that key in an array.
 * 
 * @param {Object} obj: An object that will be searched through for the key argument.
 * @param {String} key: A string that is the name of the key in the object.
 * @return {Array}: Array containing all the values in the key, if it exists in the object.
 *
 */
 function pluck(obj, key) {
    return map(obj, function(value) {
        return value[key];
    });
}

module.exports.pluck = pluck;

/**
 * every:
 * 
 * Runs every value in a collection through a function. If every value returns true it will return true, if not it will return false.
 * 
 * @param {Array or Object} collection: An array or object as collection.
 * @param {Function} func: A function that will be ran through every value in the collection.
 * If this argument is not given, the function will check if every value is truthy or falsy, and return false if any of them are falsy.
 * @return {Boolean}: A true or false boolean depending on if every value returns true.
 */ 
 
function every(collection, func) {
    var check = func || identity(collection); 
    for (var i = 0; i < collection.length; i++) { 
        if (!check(collection[i])) { 
            return false;
        }
    }
    return true; 
  }
  
  module.exports.every = every;
  
/**
 * some:
 * 
 * Runs every value in a collection through a function. If even one value returns true it will return true, if not it will return false.
 * 
 * 
 * @param {Array or Object} collection: An array or object as collection.
 * @param {Function} func: A function that will be run through every index in the collection.
 * If a function argument is not given it will return true if at least one element is truthy.
 * @return {Boolean}:  Boolean value depending on whether or not one of the values returns true.
 */ 
 
 function some(collection, func) {
   if (typeof func !== 'function') {
       for (let element of collection) {
           if (element) return true;
       }
        return false; 
   }
 let mapArr = map(collection, (element, position, collection) => func(element, position, collection));
   for (let ele of mapArr) {
       if (ele) return true; 
   }
   return false;
}

module.exports.some = some;

/**
 * reduce:
 * 
 * Loops through an array and runs a function through every element. Reduces every value down to one single value. 
 * If no seed is given the first index in the array will be the first value that is used.
 * 
 * @param: {Array} array: Any array that will be looped over.
 * @param {Function} func: A callback function that will run through every index of the array.
 * @param {Any Datatype} seed: A value that is optional. If given it will be the first value that used in the function
 * @return {Any Datatype}: A single value. The datatype depends on if there's a seed, if no seed is given this value will
 * be the same datatype as the first index in the array. If not it will be the same as the seed.
 */
 
function reduce(array, func, seed){
    let current = seed;
    if (current === undefined){
        current = array[0];
        for (let i = 1; i < array.length; i++){
            current = func(current, array[i], i);
        }
        return current; 
    }
    for (let i = 0; i < array.length; i++){
       current = func(current, array[i], i);
    }
    return current; 
}

module.exports.reduce = reduce;

/**
 * extend:
 * Adds the properties from one object to another.
 * 
 * @param {Object} obj1: An object as collection.
 * @param {Object} obj2: The object that will be copied into obj1
 * @return {Object}: Returns obj1 now that the new properties have been added.
 */ 
 
function extend(obj1, obj2, ...objects) {
each(arguments, function(item){ 
  each(item, function(value, prop){ 
   obj1[prop] = value; 
  });
 });
 return obj1; 
}

module.exports.extend = extend;