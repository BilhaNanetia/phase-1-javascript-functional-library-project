 //Define the function myEach 
  function myEach(collection, callback) {

   //Check if the collection is an array
     if (Array.isArray(collection)) {

    //Iterate over each element in the array
      for (let i = 0; i < collection.length; i++) {

    //Call the callback function with the current element
     callback(collection[i]);

  }

  } else if (typeof collection === 'object') { 

     //Iterate over each key-value pair in the object
      for (let key in collection) {

    //Call the callback function with the current value
      callback(collection[key]);

   }
  }
   //Return the original collection
     return collection;

}

//Define the function myMap
function myMap(collection, callback) {

  //Initialize an empty array to store the mapped values
   const mappedArray = [];

    if (Array.isArray(collection)) {
     for(let i = 0; i < collection.length; i++) {

   //Apply the callback function to the current element and push the result to the mapped array
      mappedArray.push(callback(collection[i], i));
        }
    } else if(typeof collection === 'object') {
        for(let key in collection) {       //Use for in to iterate over each key-value pair in the object
            mappedArray.push(callback(collection[key], key));
        }
    }
    return mappedArray;
 }

 //Define the function myReduce
 function myReduce(collection, callback, acc) {
    if (!Array.isArray(collection)  &&  typeof collection !== 'object') {
        throw new Error('Collection must be an array or an object');

    }
    let keys = Object.keys(collection);
    let result = acc !== undefined ? acc : collection[keys[0]];

    if (acc === undefined) {
        keys = keys.slice(1);
    }
    for (let key of keys) {
        result = callback(result, collection[key], collection);

    }
    return result;
 }

 //Define the function myFind
 function myFind(collection, predicate) {
    if(Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            if (predicate(collection[i])) {
                return collection[i];
            }
        }
    } else if (typeof collection === 'object' && collection !== null) {
        for (const key in collection) {
            if (Object.prototype.hasOwnProperty.call(collection, key)) {
                if (predicate(collection[key])) {
                    return collection[key];
                }
            }
        }
    }
    return undefined;
}
 //Define the function myFilter
 function myFilter(collection, predicate) {
    if(Array.isArray(collection)) {
   return collection.filter(predicate);
    } else if (typeof collection === 'object' && collection !== null) {
        const filteredKeys = Object.keys(collection).filter(key => predicate(collection[key]));
        return filteredKeys.map(key => collection[key]);
        } else {
    
        return [];
    }
  }
 

 //Define the function mySize
 function mySize(collection) {
    if (Array.isArray(collection)) {
      return collection.length;

    } else if (typeof collection === 'object' && collection !== null) {
        return Object.keys(collection).length;
    } else {
        return 0;
    }
  }  

  //Define the function myFirst
  function myFirst(array, n) {
    if (!Array.isArray(array)  ||  array.length ===0) {
        return undefined;
    }

    if (typeof n === 'undefined') {
        return array[0];     //Return the first element if n is not provided

    } else {
        return array.slice(0, n);   //Return the first n elements if n is provided
    }
  }

  //Define the function myLast
  function myLast(array, n) {
    if (!Array.isArray(array)) {
        return undefined;
    }

    const length = array.length;
    if (n === undefined) {
        return length === 0 ? undefined : array[length - 1];
    } else {
        return array.slice(Math.max(length - n, 0));
    }
  }

  //Define the function myKeys
  function myKeys(object) {
    if (typeof object !== 'object'  ||  object === null) {
        return [];

    }
    return Object.keys(object);

  }

  //Define the function myValues
  function myValues(object) {
    if (typeof object !== 'object' || object === null) {
        return [];

    }
    return Object.values(object);

  }