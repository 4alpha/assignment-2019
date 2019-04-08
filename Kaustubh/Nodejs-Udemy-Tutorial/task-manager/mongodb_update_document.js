const {MongoClient, ObjectID}=require('mongodb');

const connectionURL='mongodb://127.0.0.1:27017';
//Database name

const databaseName='task-manager';

MongoClient.connect(connectionURL,{useNewUrlParser: true},(error,client)=>{

    if(error)
    return console.log('Unable to connect');

    // console.log('Connected')
    //Getting database instance
    const db=client.db(databaseName);
//Here we update attribute using $set operator
//Below is standard way
/*
    const updatePromise=db.collection('users').updateOne({
        _id: new ObjectID('5ca300b49c711b1d524f8e80')
    },{
        $set: {
            name: 'Chiku'
        }
    })

    updatePromise.then((result)=>{
        console.log('The updated result is \n',result.result.n);
    }).catch((error)=>{
        console.log('Something went wrong\n',error);
    })
    */

    
    // db.collection('users').updateOne({
    //     _id: new ObjectID('5ca300b49c711b1d524f8e80')
    // },{
    //     //Generally used to set the value
    //     /*
    //     $set: {
    //         name: 'Chiku'
    //     }
    //     */
    //    //The below is $inc operator which increments(by +ve value) or decrements(by -ve value) the counter
    //    $inc: {
    //        age: 1
    //    }
    // }).then((result)=>{
    //     console.log('The result is\n',result);
    // }).catch((error)=>{
    //     console.log('An error occured\n',error);
    // })

    //Let's use updateMany 
    //Function signature is as follows
    //updateMany(filter, update, options, callback)
    db.collection('users').updateMany({
        //filter: filter documents having age=22
        age: 22
    },{
        //Update operation
        $inc: {
            age: 1
        }
    }).then((result)=>{
        console.log('The results are ',result);
    }).catch((error)=>{
        console.log('An error occured ',error);
    })
})
