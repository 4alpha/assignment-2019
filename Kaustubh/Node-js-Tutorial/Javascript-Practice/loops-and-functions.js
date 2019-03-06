/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */
/*var i = 0;
var j = 10;
checkiandj:
  while (i < 4) {
    console.log(i);
    i += 1;
    checkj:
      while (j > 4) {
        console.log(j);
        j -= 1;
        if ((j % 2) == 0) {
          continue checkj;
        }
        console.log(j + ' is odd.');
      }
      console.log('i = ' + i);
      console.log('j = ' + j);
  }*/
/*console.log('The square of a number ', square(10));
function square(x)
{
  return x * x;
}/*
Exception: SyntaxError: missing ) after argument list
@Scratchpad/1:29
*/
/*
undefined
*/

/*console.log("First line",square);
console.log("Second Line",square(5));

var square=function(n)
{
  return n*n;
}*/

/*function factorial(n)
{
  if(n==0 || n==1)
    return 1;
  else
    {
      console.log("\nStep");
      return n*factorial(n-1);
    }
}*/

/*console.log("Factorial of a number ",factorial(5));

var factorial=function fact(n)
{
  if(n==0 || n==1)
    return 1;
  else
    {
      console.log("\nStep");
      return n*factorial(n-1);
    }
}
*/

//Nested function 1

/*
function outside(y)
{
  function inside(x)
  {
      return x+y;
  }
  /*
  return inside;
}
*/

/*Way 1 to do the function nesting*/

/*
outside_func=outside(4);//Adds the value in outside function
result=outside_func(6);//Using outside function, we can insert value in inside function
*/

/*Way 2 to do function nesting*/

/*
result=outside(4)(6);
console.log("The addition of Outside and Inside function is ",result);
*/

//Nested function type 2

/*
function a(x)
{
  function b(y)
  {
    function c(z)
    {
      console.log("Triple addition is ",x+y+z);
    }
    c(6);
  }
  b(5);
}
a(4);
*/

//Another way not to do above function

/*
function a(x)
{
  function b(y)
  {
    function c(z)
    {
      console.log("Triple addition is ",x+y+z);
    }    
  }  
}
*/

/*
Not to call function in below way
a(4)(5)(6);
*/