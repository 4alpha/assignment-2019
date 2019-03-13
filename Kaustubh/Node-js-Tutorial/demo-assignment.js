var http=require("http");
var fs=require("fs");

http.createServer((req,res)=>
{    
   res.writeHead(200,{"Content-Type": "text/html"});
    fs.readFile("Webpage_for_NodeJS.html",function(err,data)
    {
        if(err)
        throw err;
        else
        {
        console.log("Data is writing");
        res.write(data);
        }
    });
    //console.log("The data written is ",data);
}).listen(8080);