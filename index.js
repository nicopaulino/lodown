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
 * @param {Any Value} value: Any value
 * @return {Any Value}: the input value unchanged
 */

function identity(value) {
    return value;
}
module.exports.identity = identity;

/**
 * typeOf: 
 * 
 * Designed to return the type of (value) as a string
 * 
 * @param {Any Value} value: Any value
 * @return {String}: the function returns a string of whatever data type the value is.
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
  * Designed to return the first indices of an array; how many determined by 
  * what the (num) parameter is.
  * 
  * @param {Any Array} array: the array that will be iterated over
  * @param {Any Number} num: any number
  * @return {Array} array: returns the entire array argument
  * @return {Array} result: returns the first indices of the array
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
 * Designed to return the last indices of an array; how many determined by 
 * what the (num) parameter is.
 * 
 * @param {Any Array} array: the array that will be iterated over
 * @param {Any Number} num: any number
 * @return {Array} array: returns the entire array argument
 * @return {Array} newResult: returns the last indices of the array
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
 * Designed to check if an array contains a specific value
 * 
 * @param {Any Value} value: any value
 * @return {String}: return data type of the value as a string
 */ 
 
function indexOf(value) {
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

 module.exports.indexOf = indexOf;
 
 /**
  * contains:
  * 
  * Designed to check if an array contains a specific value
  * 
  * @param {Any Array} array: the array that will be checked for the value
  * @param {Any Value} value: any value
  * @return {Boolean}: return either true or false
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
 * Designed to delete all duplicate values from an array.
 * 
 * @param {Any Array} array: any array.
 * @return: {Any Array}: the array with its duplicates deleted.
 */ 
 
function unique(array) {
    let unique = [...new Set(array)];
    return unique;
}

module.exports.unique = unique;

/**
 * filter:
 * 
 * Designed to return a new array of elements for which calling test returned true
 * 
 * @param {Object} collection: an object as collection.
 * @param {Any Function} test: a function to test against.
 * @return: {Array}: the array with the values in the collection that passed the test.
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
 * Designed to call a function for each element in an array, and return a
 * new array of elements for which calling the function returned false.
 * 
 * @param {Object} collection: an object as collection.
 * @param {Any Function} test: a function to test against.
 * @return {Array}: the array full of elements that didn't pass the test.
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
 * Designed to 
 * 
 * @param {Any Array} array: an array
 * @param {Any Function} funct: a function
 * @return {Array}: return array with 2 subarrays. One with all values that returned true,
 * and one with all values that returned false.
 *
 */
 
 function partition(array, funct) {
    var fail = [];
    var pass = array.filter((element, index, arr) => {
        if (funct(element, index, arr))
        return true;
        fail.push(element);
    });
    return [pass, fail];
}

module.exports.partition = partition;

/**
 * map:
 * 
 * Designed to call the function parameter for each element in the collection 
 * parameter.
 * 
 * @param {Object} collection: an object as collection
 * @param {Any Function} action: a function
 * @return {Array}: save the return value of each <function> call in a new array and
 * return the new array
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
 * Designed to return an array containing the value of the property parameter 
 * for every element in array parameter.
 * 
 * @param {Any Array} array: any array
 * @param {Property}: a property in an array
 * @return {Value}: array containing value of property for every element in array
 *
 */
 function pluck(array, prop) {
    return map(array, function(value) {
        return value[prop];
    });
}

module.exports.pluck = pluck;

/**
 * every:
 * 
 * Designed to
 * 
 * @param
 * @param
 * @return
 * 
 */ 