//CRUD  Operations

// const mongodb=require('mongodb');
// const mongoClient=mongodb.MongoClient

//Use Object destructuring

const {MongoClient,ObjectID}=require('mongodb');
//In below URL. we avoid writing localhost (instead of IP address) which causes certain issues
const connectionURL="mongodb://127.0.0.1:27017 ";
const databaseName='task-manager';

// Create a new ObjectID instance
const id=new ObjectID();
//console.log('The ID is ',id);
//Binary no in ID is
console.log('The ID is ',id.id.length);
console.log('The ID is ',id.toHexString().length);
console.log('Timestamp is ',id.getTimestamp());
//useNewUrlParser parses URL in connectionURL (previously it was UrlParser which is deprecated now)
MongoClient.connect(connectionURL,{useNewUrlParser: true},(error,client)=>{

    if(error)
    return console.log('Unable to connect to MongoDB');

   // console.log('Connected successfully');
   const db=client.db(databaseName)
//Inserts one record
  
/*db.collection('users').insertOne({
       name: 'Kaustubh',
       age: 22
   },(error,resultData)=>
   {
       if(error)
       return console.log('Error while inserting data');

       /**
        * resultData object contains different properties such as 
                
        *  insertedCount 	Number 	The total amount of documents inserted.
        */
       /*.ops below is of array type
       All the documents inserted using insertOne/insertMany/replaceOne.
        Documents contain the _id field if forceServerObjectId == false for insertOne/insertMany
       */
       //console.log(resultData.ops);
   //})

   //Insert many records
//    db.collection('users').insertMany([
//        {
//            name: 'Kaustubh',
//            age: 22
//        },
//        {
//            name: 'Pranjan',
//            age: 22
//        },
//        {
//            name: 'Tejashri',
//            age: 24
//        },
//        {
//            name: 'Apurwa',
//            age: 25
//        }
//    ],(error,result)=>{
//        if(error)
//        return console.log('Error occured in inserting multiple records');

//        //Prints Hash number of documents
//        console.log('Total Inserted IDs are ',result.insertedIds);    
//    })

//In challenge section , I've asked to add new table with different documents

// db.collection('work').insertMany([
//     {
//         description: 'Adding multiple documents',
//         status: true
//     },
//     {
//         description: 'Taking lunch',
//         status: false
//     },
//     {
//         description: 'Enjoying day',
//         status: true
//     }
// ],(error,result)=>{

//     if(error)
//     return console.log('Error occured in inserting data');

//     console.log('The data inserted is as follows\n',result.ops);
// });

// db.collection('users').insertOne(
//     {
//         _id: id,
//         name: 'Arjun',
//         age: 24
//     },(error,result)=>{
//             if(error)
//             return console.log('Error while entering inside Users');
//         console.log('The result is ',result.ops);
//     }
// )
})