const express=require('express');

const app=express();

app.get('',(req,res)=>{
    // didn't work for write method, so used send() method
    res.send('Hello Express!!!');
})

//To display pages, such as home/about or home/help, we do following
app.get('/help',(req,res)=>{
    res.send('Help me out!!!');
})

//In challenge part, I've been asked to add route for about and weather page

app.get('/about',(req,res)=>
{
    res.send('About us');
})

app.get('/weather',(req,res)=>
{
    res.send('Weather report');
})

app.listen(3000,()=>console.log('Server listening at port 3000'))