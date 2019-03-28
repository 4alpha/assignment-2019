//In this section, we're using callback abstraction, which is more optimal than above

//Let's create a callback which returns longitude and latitude based on a address which is passed as an argument
const request = require('request');
const geocode = (address, callback) => {
    //The below url contains a plain address variable
    //This plain address is prone to error
    //If we insert special characters such as &,#, it'll crash
    //Let's test it by including &,?,# after address in url
    //After testing, it throws error stating that provide valid address

    //const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1Ijoia2F1c3R1Ymh6IiwiYSI6ImNqdG80dmlkcjBocjI0NHFwa2Z1cG5qcHcifQ.1q6Z6v21MXOoDmCe0S3eSQ';

    //encodeURIComponent escapes all error prone characters such as '?','#'
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1Ijoia2F1c3R1Ymh6IiwiYSI6ImNqdG80dmlkcjBocjI0NHFwa2Z1cG5qcHcifQ.1q6Z6v21MXOoDmCe0S3eSQ';
    //Let's substitute for url and res
    request({
        url,
        json: true
    }, (error, {body}) => {
        if (error) {
            //Below is usual way
            //console.log('Unable to retrieve location co-ordinates\nCheck your network connection');

            //New way is which includes error and res
            callback('Unable to connect location service\nCheck your network connection', undefined)
        } else if (body.features.length === 0) {
            //The normal way
            // console.log('Unable to retrieve location co-ordinates\nProvide valid address');
            callback('Unable to retrieve location co-ordinates\nProvide valid address', undefined)
        } else {
            const data = {
                longitude: body.features[0].center[0],
                latitude: body.features[0].center[1],
                location: body.features[0].place_name
            }
            callback(undefined, data)
        }
    })
}

//Retrieving location by providing co-ordinatines
const forecast = (longitude, latitude, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + longitude + ',' + latitude + '.json?access_token=pk.eyJ1Ijoia2F1c3R1Ymh6IiwiYSI6ImNqdG80dmlkcjBocjI0NHFwa2Z1cG5qcHcifQ.1q6Z6v21MXOoDmCe0S3eSQ';
    request({
        url,
        json: true
    }, (err, {body}) => {
        if (err)
            callback('Unable to connect location service\nCheck your network connection', undefined)
        else if (body.features.length === 0) {
            //The normal way
            // console.log('Unable to retrieve location co-ordinates\nProvide valid address');
            callback('Unable to retrieve location co-ordinates\nProvide valid co-ordinates', undefined)
        } else {
            const data = {
                location: body.features[0].place_name
            }
            callback(undefined, data)
        }
    })
}

module.exports = {
    geo: geocode,
    fcast: forecast
}

//Can also be done using
/**
 * module.exports=geocode
 */