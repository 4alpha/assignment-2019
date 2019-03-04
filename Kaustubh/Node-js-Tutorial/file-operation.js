//File manipulation operations

var filesys=require("fs"); //This include file system module
var filename="sample.txt"; //New file should be created beforehand
filesys.watch(filename,() => console.log("File changes"));