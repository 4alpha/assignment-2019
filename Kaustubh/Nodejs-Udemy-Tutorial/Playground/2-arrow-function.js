/**
 * Here we're doing some of the arrow functions
 * 
 * Remember that we cannot use 'this' keyword inside arrow function
 * arrow function will be very useful except for methods
 */

 //For demo, we retrieve square of a number

/* const square=(x)=>
 {
     return x*x;
 }
 console.log('Square of a number ',square(5));
 */

 //Another shorthand method
//This method is useful when we've to write a single line such as returning something or adding, substracting etc.
/* 
const square=(x)=>x*x;
 console.log('Square of a number ',square(16));
 */

 const event1={
     name: 'Wedding ceremony',
     guestList: ['Mukund','Prashant','Aslam sir','Shripad','Harshada','Kaustubh'],
     printDetails(){
         /*
         Here this can be used, but also observe that this is not arrow function
         console.log('Name of an event is ',this.name);
         */
        /**
         * Here we can use this keyword in function given we've used this as prefix to forEach loop
         * I've tried to remove this keyword before forEach, it throws a ReferenceError which says that it can not refer array 'guestlist'
         */
        console.log('Guest list is as follows\n');
        this.guestList.forEach((guest)=>{
            console.log(guest+' is attending ',this.name);
        })
     }
 }

 event1.printDetails();