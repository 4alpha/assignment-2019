/*
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
    }

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

/*console.log('The weather today is ',response.body.daily.data[0].summary+' Current temperature '+temperature+' Rain forecast',rainProbability)
    

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
 */

const geocode=require('./Utils/geocode')
const weatherForecast=require('./Utils/forecast')
//Let's accept location using command line arguments
const location=process.argv[2];//At index 2 is where our arguments will be
/*
error prone URL
geocode('Pune#',(data)=>console.log('The location of  data is: ',data))
*/

/*
geocode.geo('Shelgi,Solapur',(error,data)=>{
    if(error)
    console.log('Error',error);
    console.log('The location of data is: ',data)
})

//Here we retrieve location with the help of co-ordinates provided as arguments list
geocode.fcast('-75.7088', '44.1545', (error, data) => {
    if(error)
    console.log('Error', error)
    console.log('Data', data)
  })

  //Now we'll retrieve weather related info
//Here, First arg is latitude, second is longitude
  weatherForecast.forcast('17.691662','75.930927', (error, data) => {
    if(error)
    console.log('Error', error)
    console.log(data)
  })

*/

//Now let's use callback chaining
//In this, first we'll call geocode method to get location co-ordinates 
//then we'll use those co-ordinates to find weather conditions using forecast method

if(!location)
{
    return console.log('Please provide city as an argument');
}
//geocode.geo(location,(error,data)=>
//Using object destructuring, we get three attributes viz. latitude,longitude and location
geocode.geo(location,(error,{latitude,longitude,location})=>
{
    if(error)
    console.log(error);
    else
    {
        //console.log(data);
        weatherForecast.forcast(latitude,longitude,(error,forecastdata)=>
        {
                if(error)
                console.log(error)
                else
                {
                    // Since we dont' take data as a paramter, we don't use console.log(data.location); instead we do as follows
                    console.log(location);
                    console.log(forecastdata);
                }
        })
    }
})