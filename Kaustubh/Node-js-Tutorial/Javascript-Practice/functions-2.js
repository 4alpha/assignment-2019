/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

/*function foo(i) {
  if (i < 0)
    return;
  console.log('begin: ' + i);
  foo(i - 1);
  console.log('end: ' + i);
}
foo(3);
*/

var createCar= function(carname){
  var carObj;
  return
  {    
    setName: function(newCarName){
      carname=newCarName;
    },
    getCarName: function(){
    return carname;
  }
  }
  
}

var createPet = function(name) {
  var sex;
  
  return {
    setName: function(newName) {
      name = newName;
    },
    
    getName: function() {
      return name;
    },
    
    getSex: function() {
      return sex;
    }
  }
}

var car=createCar("BMW");
/*
Exception: SyntaxError: function statement requires a name
@Scratchpad/1:24
*/