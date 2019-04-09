const mongoose=require('mongoose');
const connectionURL='mongodb://127.0.0.1:27017';
//Let's concatenate Database name in below connectionURl
mongoose.connect(connectionURL+'/task-manager-api',{
useNewUrlParser: true,
useCreateIndex: true,
// Below removes deprecated warning
useFindAndModify: false
})


