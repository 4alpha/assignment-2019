const mongoose = require('mongoose');
// Exported DB connection URL to .env file
// const connectionURL = 'mongodb://127.0.0.1:27017';
const connectionURL = process.env.DATABASE_CONNECTION_URL;
//Let's concatenate Database name in below connectionURl
const dbName=process.env.DATABASE_NAME;
mongoose.connect(connectionURL + '/'+dbName, {
    useNewUrlParser: true,
    useCreateIndex: true,
    // Below removes deprecated warning
    useFindAndModify: false
})
/**
 *The MongoDB Node.js driver rewrote the tool it uses to parse MongoDB
  connection strings. Because this is such a big change, they put the new connection
  string parser behind a flag. 
  To turn on this option, pass the useNewUrlParser option
   to mongoose.connect() or mongoose.createConnection().

    we define these indexes within our Schema at the path level or the schema level
    When your application starts up, Mongoose automatically calls createIndex for each
     defined index in your schema. 

 */