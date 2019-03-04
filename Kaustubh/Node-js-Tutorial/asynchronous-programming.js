/**
 * Using asynchronous programming to display contents of file
 */

 var fs=require("fs");

 var fileName="sample.txt";

 fs.readFile(fileName,(err,data) =>{
    if(err)
    {
    console.log("Error in reading file");
    }
    else
    {
        console.log("Data in the file is : \n",data.toString());//Here toString() is important method as it converts binary buffer into readable format
    }
 });

 console.log("Hello there, reading file using asynchronous I/O in node js");// Though this line is written at the end, it'll be displayed at the beginning in console