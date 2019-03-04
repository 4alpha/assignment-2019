
//Here require is used to include another js file
// var second=require("./second.js");

// var res=second.sums(10,10);

//Using object destructuring

// var  {sum1,add}=require("./second");

// console.log("SUM is ",sum1(10,20));
// console.log("Addition is ",add(20,30))

const http=require("http");

const server=http.createServer((req,res) =>
{
        res.end("Hello World, my first node js application");
}
);
server.listen(5000);
console.log("Server has been started on Port 5000");