/**
 *
 *setTimeout example in nodejs
console.log('Welcome to my Weather app');

setTimeout(()=>console.log('Thank you for visiting'),2000);

setTimeout(()=>console.log('Wait for the end'),0); 
 */

 const request=require('request');

 
 //To add optional parameters such as SI unit, language,Latitude, Longitude, we write it at the end of url which is known btw 'queryString'
 //The querystring will begin with question mark (?) and will always be in key-value pair
 const url='https://api.darksky.net/forecast/9c23940e906e3954829f0469585379fd/37.8267,?units=si';

 request({url: url, json: true},(error,response) =>
 {
     //Including attribute json: true will not require to call json.parse 
     //const data=JSON.parse(response.body);
     
     //const data=response.body.currently;
     /*
     To display data using response
     console.log(data);
     */
     //To display current information
     
     //console.log(data);

     //In this challenge, we're going to print temperature and rain (in percentage)
     //Here error occurs for OS level anamolies such as network failure, memoryoverflow error
    if(error)
    {
        console.log('Unable to connect to the weather service!!!');
    }
    /*else if(response.body.error)
    {
        //Here in this case, I've not inserted latitude, hence website returned error
        console.log('Unable to find location, please insert appropriate inputs');
    }*/

    //let's check whether error returned using error code
    //Test successful, it also checks for error code
    //Be cautious to catch all errors according to error code
    else if(response.body.code===400)
    {
        console.log('Unable to find location, please insert appropriate inputs');
    } 
     else
     {
     const temperature=response.body.currently.temperature;
     const rainProbability=response.body.currently.precipProbability;
    // console.log('Current temperature\t'+temperature+'\nRain forecast\t',rainProbability);
    
     /**
      * Now we're going to access daily weather forecasts, which is situated at 0th index in data array 
      */
     
   // console.log('The weather today is ',response.body.daily.data[0].summary+' Current temperature '+temperature+' Rain forecast',rainProbability)
    //Now let's display above report in french language by modifying url into accepting lang=fr

    console.log('The weather today is ',response.body.daily.data[0].summary+' Current temperature '+temperature+' Rain forecast',rainProbability)

    //In this section, we're going to access Latitude and Longitude of a location
    //This can achieved using third party API viz MapBox//Let's create a new URL which will accepts attributes as Longitude and Latitude   

     }   
 })

 //const locationURL="https://api.mapbox.com/geocoding/v5/mapbox.places/Pune.json?access_token=pk.eyJ1Ijoia2F1c3R1Ymh6IiwiYSI6ImNqdG80dmlkcjBocjI0NHFwa2Z1cG5qcHcifQ.1q6Z6v21MXOoDmCe0S3eSQ";
 
 //Testing error for faulty url
 const locationURL="https://api.mapbox.com/geocoding/v5/mapbox.places/12what.json?access_token=pk.eyJ1Ijoia2F1c3R1Ymh6IiwiYSI6ImNqdG80dmlkcjBocjI0NHFwa2Z1cG5qcHcifQ.1q6Z6v21MXOoDmCe0S3eSQ";   
 request({url: locationURL, json: true}, (error,response)=>
 {
    if(error)
    console.log(error);
    else if(response.body.features.length===0)
    {
        console.log('Unable to find location from map');
    }
    else
    {
        console.log('The longitude of City is '+response.body.features[0].center[0]+'\nThe latitude of City '+response.body.features[0].center[1])
    }
 }
 )