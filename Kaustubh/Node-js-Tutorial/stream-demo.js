//Let's create an http server and a file system instance

/*
const http=require("http");
const fs=require("fs");
const filename="Webpage_for_NodeJS.html";
const server=http.createServer((req,res)=>
{
    //Wrong way to do stream example
    // fs.createReadStream(filename,function(err,data)
    // {
    //     if(err)
    //     {
    //         console.log("Error occured ",err);
    //     }
    //     else
    //     {
    //         res.write(data);
    //     }
    // });
    
    const stream=fs.createReadStream(filename);
    stream.pipe(res);
}).listen(8699,()=>
{
    console.log("Listening on port 8699");
});
*/

/**Piping example 1*/

/*
const fs=require("fs");

const readstream=fs.createReadStream('sample.txt');

const writeStream=fs.createWriteStream('sample_'+Date.now()+'.txt');

readstream.pipe(writeStream,()=>
{
console.log("Writestream invoked");
});
*/

/**Piping example 2 */

/*
const fs=require('fs');
const str="This is me, Kaustubh\n";
const filename=fs.createWriteStream("./big_"+Date.now()+".txt");

for(let i=0;i<1e6;i++)
{
    filename.write(str);
}

filename.end();

//Now let's host this file on http server 

const http=require('http').createServer();

http.on("request",(req,res)=>{
    console.log("Filename is ",filename.path);
    //Here if we use filename only, it'll throw error stating that filename must be string or buffer, that's why we must use filename.path property
    fs.readFile(filename.path,(err,data)=>
    {
        if(err)
        throw err;
        else
        {
            res.writeHead(200,{'content-type': 'text/plain'});
            res.end(data);
        }
    });
}).listen(8699,()=>
{
console.log("Listening on port 8699");
});*/

const fs=require('fs');
const gzlib=require('zlib');
const filename="big.txt";

const readstream=fs.createReadStream(filename);
const writeStream=fs.createWriteStream(filename+Date.now()+".gz");

const zipfile=gzlib.createGzip();

readstream.pipe(zipfile).pipe(writeStream);