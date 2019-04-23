const app=require('./app');
// Exporting port number to .env file
// A simple node program for executing commands
//  using an environment from an env file.
const portNumber = process.env.PORT;

app.listen(portNumber, () => console.log('Server listening at port ', portNumber))