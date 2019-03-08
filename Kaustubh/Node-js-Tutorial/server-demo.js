var http=require('http');

var events=require('events').EventEmitter;

//Here we're using Callback functions
var func=(req,res) =>
{
    console.log("Starting your server");
    res.writeHead(200,{"Content-Type" : "text/html"});
    res.write(
        "<!DOCTYPE html><html><body><p>Hello there, you've been pleased to see</p></body></html>");
        res.end();
}
var newServer=http.createServer(func);
// newServer.on("close",function(){
    
//     console.log("Closing our server");
// });
newServer.listen(8080);
// newServer.close();