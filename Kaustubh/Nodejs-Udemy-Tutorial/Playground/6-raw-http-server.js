const https=require('https');
const url='https://api.darksky.net/forecast/9c23940e906e3954829f0469585379fd/17.691662,75.930927?units=si';
const request=https.request(url,(response)=>{

    let data='';
    response.on('data',(chunk)=>{
        data+=chunk.toString();        
    })
    response.on('end',()=>{
        const responseData=JSON.parse(data)
        console.log(responseData);
    })
})

request.on('error',(err)=>{
    console.log('Something went wrong!!!',err);
})
request.end();