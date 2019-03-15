//Event Emitter example 1

/*
const events=require('events');

class MyEmitter extends events{

}

const myemitter=new MyEmitter();

myemitter.on("event",()=>
{
    console.log("Event now emitted");
})

myemitter.emit('event');

*/

//Event Emitter example 2

/*
const emitter=require('events');

class EventClass extends emitter
{

}

const myNewEmitter=new EventClass();

myNewEmitter.on("event-add",(a,b)=>
{
    console.log('The addition is ',a+b);
}
)

myNewEmitter.emit('event-add',15,25,()=>
{
    //Here this arrow function won't print nothing
    console.log('Inside emit function');
});
*/

//Event Emitter example 3
//Using Event Emitter once method

/*
const event=require('events');

class MyEvent extends event{

}
//While declaring variable, it doesn't take '-' symbol between it
const emitter_once=new MyEvent();

let count = 0;
emitter_once.once('emit-once',()=>
{
    count++;
    console.log('Count is now ',count);
})

emitter_once.emit('emit-once');
//This will print count=1

emitter_once.emit('emit-once');
//Prints nothing
*/

//Event Emitter example 4 to check error

const event1=require('events');

class MyEvent extends event1{

}

const check_error=new MyEvent();

//This method didn't work out
//check_error.emit('error',new Error("Error occured"))
check_error.on('error',(err)=>
{
    console.log("Error occured, sorry!!!");
}
)

check_error.emit('error');