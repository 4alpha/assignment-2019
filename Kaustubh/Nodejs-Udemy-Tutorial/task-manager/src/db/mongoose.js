const mongoose = require('mongoose');
const connectionURL = 'mongodb://127.0.0.1:27017';
//Let's concatenate Database name in below connectionURl
mongoose.connect(connectionURL + '/task-manager-api', {
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