console.log('Client side JavaScript is being loaded!!!');

//Let's use fetch API which are accessible for browser (not nodejs

fetch('http://puzzle.mead.io/puzzle').then((response)=>{

response.json().then((data)=>{
    console.log(data);
})
})
//Here we pass url in fetch() to get expected result, the result will gets printed in console
fetch('http://localhost:9000/weather?address=Solapur').then((response)=>{
    response.json().then((data)=>{
        if(data.error_message)
        {
            console.log(data.error)
        }
        else if(data.error_message_address)
        {
            console.log(data.error_message_address);
        }
        else if(data.error_message_forecast)
        {
            console.log(data.error_message_forecast);
        }
        else
        {
            console.log(data);
        }
    })
})