//CRUD  Operations

// const mongodb=require('mongodb');
// const mongoClient=mongodb.MongoClient

//Use Object destructuring

const {MongoClient,ObjectID}=require('mongodb');
//In below URL. we avoid writing localhost (instead of IP address) which causes certain issues
const connectionURL="mongodb://127.0.0.1:27017 ";
const databaseName='task-manager';
//useNewUrlParser parses URL in connectionURL (previously it was UrlParser which is deprecated now)
MongoClient.connect(connectionURL,{useNewUrlParser: true},(error,client)=>{

    if(error)
    return console.log('Unable to connect to MongoDB');

   // console.log('Connected successfully');
   const db=client.db(databaseName)
   db.collection('users').findOne({
       //I've done below in wrong way, the result will be null
       //To avoid this, let's wrap the ID into binary format(in which string is stored in MongoDB)
       //_id: '5ca30a0862f5ca237f0e315b'
       _id: new ObjectID('5ca30a0862f5ca237f0e315b')
   },(error,user)=>{
    if(error)
    return console.log('Cannot find data');

    console.log(user);
   })

   //find returns array of object we intended to find
   db.collection('users').find({
    name: 'Kaustubh'
   }).toArray((error,userData)=>{
       if(error)
       return console.log('Unable to find user ',error);
    //If you print like following, every property of that JSON object gets returned, it's called Cursor (a pointer, which points to the result)
    //Be specific to what you want to return
       console.log('The data is \n',userData);
   })

   //To get count of documents

   db.collection('users').find({
       age: 22
   }).count((error,count)=>{
    if(error)
    return console.log('Unable to find user ',error);

    console.log('Count is ',count);
   })
  
   db.collection('work').find({
       status: false
   }).toArray((error,workStatus)=>{
       if(error)
       return console.log('Nothing found ',error);

       console.log('The task(s) are as follows\n',workStatus);
   })
})