<<<<<<< HEAD
var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
]
  

function addElementToBeginningOfArray(array,element) {
  var newarray = [element,...array]
  return newarray
} 

  
function destructivelyAddElementToBeginningOfArray(array,element) {
  array.unshift(element)
  return array 
}  

function addElementToEndOfArray(array,element) {
  var newarray = [...array,element]
  return newarray
} 

  
function destructivelyAddElementToEndOfArray(array,element) {
  array.push(element)
  return array 
}  

function accessElementInArray(array,index) {
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  return array
}

function removeElementFromBeginningOfArray(array) {
  var sliced=array.slice(1)
  return sliced
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array
}

function removeElementFromEndOfArray(array) {
  var sliced = array.slice(0,array.length - 1)
  return sliced
}
=======
var grilledCheeseIngredients = [
  'bread',
  'mild cheese',
  'sharp cheese',
  'butter',
  'tomato',
  'garlic'
]
  
  
  
  
  
>>>>>>> 1dc64a0138b953bb3e3a3a83f135861a1b637d55
