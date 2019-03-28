const express = require('express');

//Import forecast and geocode
const forecast = require('./Utils/forecast');
const geocode = require('./Utils/geocode');

//Now to manipulate directory path, we use core module path
const path = require('path');

//Let's import hbs
const hbs = require('hbs')
const app = express();

//Define paths for Express.js
const publicDirectoryPath = path.join(__dirname, '../public');
const viewPath = path.join(__dirname, '../templates/views');
const partialPath = path.join(__dirname, '../templates/partials')

//Setup handlebars engine and view locations 
app.set('view engine', 'hbs');
app.set('views', viewPath)
hbs.registerPartials(partialPath)

//Setup static directory to serve
app.use(express.static(publicDirectoryPath))

//To render a hbs(Handlebars) page, we do the following

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Kaustubh D Zagade'
    });
})

//Let's render about page

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About us',
        name: 'Proudly PM of India Shri Atal Bihari Vajpayee'
    });
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help me out',
        name: 'Assured by the ultimate'
    })
})

//In challenge section, we're asked to do 404 for specific pages
//Suppose, help/text is 404 (which we know), but we can show something different message
//Say Help aricle not found

//Now let's get weather details using url

app.get('/weather', (req, res) => {
    if (!req.query.address)
        return res.send({
            error_message: 'no address provided'
        })
    else {
        //Here let's just assign null to body(lat,long,loc) attribute so that it'll not take undefined ->
        //->or faulty value 
        geocode.geo(req.query.address,(error,{latitude,longitude,location}={})=>
        {
            if(error)
            return res.send({
                error_message_address: error
            })
            else
            {
                    forecast.forcast(latitude,longitude,(error,{temperature,humidity}={})=>{
                        if(error)
                        return res.send({
                            error_message_forecast: error,
                            latitude: latitude
                        })
                        else
                        {//console.log(latitude,longitude);
                            res.send({
                                location: location,
                                temperature: temperature,
                                humidity: humidity
                            })
                        }
                    })
            }
        });
        
        // res.send({
        //     address: req.query.address
        // })
    }
})

//Here we write /help/*, means faulty url trailing with help will display something
app.get('/help/*', (req, res) => {
    //We find this in views directory
    res.render('help_error', {
        error_title: 'Help related article not found',
        error_body: 'It seems you\'ve entered wrong url, traverse back to help page'
    })
})

//Let's write error files for about page
app.get('/about/*', (req, res) => {
    res.render('about_error', {
        error_title: 'Something about us not found',
        error_body: 'Please traverse back to about us'
    })
})


//Let's write 404(i.e. Page not found) page
//In order to work, we write this at the end of all app.get
//It contains * (wildcard) character, which means match all
//As we write this at an end, it checks all other files first and then if nothing matches
//It assumes that everything is unmatched

app.get('*', (req, res) => {
    res.send('My 404, Page not found');
})



app.listen(9000, () => console.log('Server listening at port 9000'))

//The below will print absolute path of a directory
//console.log(__dirname);

//The below will print current file along with absolute path
//console.log(__filename);

//join() is useful in traversing back to home directory
//Here we use ../ which will be directed to our main directory (i.e Assignment 3 (Web server))
//In short .. will go up by one folder/directory
//console.log(path.join(__dirname,'../public'))

//Now we use app.use() to actually access the files inside that respective directory
//For now, I don't know what express.static used for, in due time I'll understand
//app.use(express.static(publicDirectoryPath))

/*
app.get('',(req,res)=>{
    // didn't work for write method, so used send() method
    res.send('Hello Express!!!');
})
*/

//To set view in handlebars.js format
//app.set('view engine','hbs');

//In challenge part, I've been asked to add route for about and weather page
//The below code won't be useful since we're using app.use which will run index.html in /public
//Since, we're using app.use, we don't need the following
/*
app.get('/about',(req,res)=>
{
    res.send('About us');
})
*/

/*
app.get('/help',(req,res)=>{
    //res.send('Help me out!!!');

    //Let's send JSON data
    //In express, JSON will automatically stringify, look below, also we can send it using array
   /* 
   res.send([{
        name: 'Kaustubh',
        age: 22
    },
    {
        name: 'Sangita',
        age: 48
    }])
    
//Now
//To display pages, such as home/about or home/help, we do following
//Since, we're using app.use, we don't need the following
    //Let's route to help page
    console.log(publicDirectoryPath+'/help.html')
    
})
*/

/*
app.use(express.static(publicDirectoryPath+'/help.html'))


app.use(express.static(publicDirectoryPath+'/about.html'))
app.get('/weather',(req,res)=>
{
    res.send('Weather report');
})
*/