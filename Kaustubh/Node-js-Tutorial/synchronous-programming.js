    var fs=require("fs");
    var filename="sample.txt";

    //Let's read the file in Synchronous mode, By default nodejs uses Asynchronous mode
    var data=fs.readFileSync(filename);
    
    /**Here we need not to give any arrow function in readFileSync*/

    console.log("The data from file \n",data.toString());
    console.log("Reading data using Synchronous mode");

    /**Here in this example last line will be printed at the end, as the V8 engine executes sequentially in Synchronous mode */

