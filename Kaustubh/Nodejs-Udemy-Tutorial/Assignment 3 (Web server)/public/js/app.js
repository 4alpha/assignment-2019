console.log('Client side JavaScript is being loaded!!!');

const weatherForm=document.querySelector('form');
//Fetch value from Textbox
const searchTerm=document.querySelector('input');
//Declaring a variable for location, Temperature and Humidity
const cityName=document.querySelector('#city-name');
const temperatureTerm=document.querySelector('#temperature-details');
const humidityTerm=document.querySelector('#humidity-details');

//Assigning sample texts
cityName.textContent='';
temperatureTerm.textContent='';
humidityTerm.textContent='';
weatherForm.addEventListener('submit',(event)=>{

    event.preventDefault();

    //It returns actual string value from Textbox
    const location=searchTerm.value;    

    // It turns out that following validations need not to be there
// if(location===null || !location.match(/\s/))
// {
//     return console.log('Please enter any location');
// }

    //Let's use fetch API which are accessible for browser (not nodejs)

//Here we pass url in fetch() to get expected result, the result will gets printed in console
//'http://localhost:9000/weather?address= this URL won't work in Heroku, we replace it by following
fetch('/weather?address='+location).then((response)=>{
    response.json().then((data)=>{
        temperatureTerm.textContent='Loading';
        cityName.textContent='';
        humidityTerm.textContent='';
        if(data.error_message)
        {
            temperatureTerm.textContent=data.error_message;            
            console.log(data.error_message)
        }
        else if(data.error_message_address)
        {
            temperatureTerm.textContent=data.error_message_address;
            console.log(data.error_message_address);
        }
        else if(data.error_message_forecast)
        {
            temperatureTerm.textContent=data.error_message_forecast;
            console.log(data.error_message_forecast);
        }
        else
        {
            console.log('You\'ve entered city as '+location+' which has temperature '+data.temperature+' degrees'+' and humidity '+data.humidity);
            cityName.textContent='City name is '+location;
            temperatureTerm.textContent='Temperature is '+data.temperature+' Degrees';
            humidityTerm.textContent='Humidity is '+data.humidity+' %';
        }
    })
})   
})