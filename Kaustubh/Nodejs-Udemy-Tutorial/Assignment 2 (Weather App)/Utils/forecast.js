const request=require('request');

//Here we're going to retrieve weather forecast based on co-ordinates

const forecast=(latitude,longitude,callback)=>
{
    const url='https://api.darksky.net/forecast/9c23940e906e3954829f0469585379fd/'+latitude+','+longitude+'?units=si';

    // Let's substitute body for res to make optimal use of object destructuring, also for url
    // request({ url: url,json: true},(err,res)=>
    request({url,json: true},(err,{body})=>
    {
        if(err)
        callback('Unable to connect Weather service\nCheck your network connection', undefined)
        else if(body.error)
        {
            callback('Unable to find location, please provide proper co-ordinates',undefined);
        }
        else
        {
            const data={
                temperature: body.currently.temperature,
                humidity: body.currently.humidity,
            }
            callback(undefined,'Current temperature is '+data.temperature+' degrees with humidity '+data.humidity)
        }
    })
}

module.exports={
    forcast: forecast
}