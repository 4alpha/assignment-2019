/**In this, we're going to explore url and it's methods and properties */
//Tip of the day, Don't reinitialize const variable
//Tip of the day, If we print only url, it'll display all its properties in JSON format

const urlstring="https://nodejs.org/dist/latest-v11.x/docs/api/url.html";
const mode=require("url");
//const url=new URL("foo/",urlstring);  //Apparently, this module new URL throws undefined error even after including module "require('url')"
const  url=mode.parse(urlstring);

//Display Hash property
console.log("URL Hash is: ",url.hash);

//Let's derive another hostname of URL
console.log("Hostname of URL is ",url.hostname);
//The above property will print null as the urlstring does not contain any hash property,
// however in below, we'll try to pass urlstring consisting of hash

//Now let's move towards to url.origin
console.log("Origin of URL ",url.origin);

//Let's display port number of URL
console.log("Port of URL is ",url.port);
//The above line displays that port is null

const urlstring1="http://example.com:8087/#my-example";
console.log("Modified URL is ",mode.parse(urlstring1).hash);
//Here in above example, initially I tried to re-init the variable urlstring
//Doing above threw error which depicts that const variable cannot be initalized again, 


//Now let's change the hash of variable urlstring1 to something else
const url2=url.parse(urlstring1);
url2.hash="my-example-2";
console.log("Modified URL with different HASH is ",url2.href);

//Not getting expected answer from above code, let's try next property

//Let's derive hostname from URL
console.log("Hostname of URL is ",url2.hostname);

//Let's derive host of URL
console.log("Host of URL is ",url2.host);

//The difference between host and hostname is host displays url along with port number
// whereas hostname as the name suggests displays hostname

//Let's display port number of URL
console.log("Port of URL is ",url2.port);

//Let's change port number
url2.port=8090;

console.log("Changed Port of URL is ",url2.port);

//Displaying URL with changed port

console.log("URL after changing Port ",url2);
