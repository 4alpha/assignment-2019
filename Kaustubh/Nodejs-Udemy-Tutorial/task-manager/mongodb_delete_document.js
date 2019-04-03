const {MongoClient, ObjectID}=require('mongodb');

const connectionURL='mongodb://127.0.0.1:27017';
//Database name

const databaseName='task-manager';

MongoClient.connect(connectionURL,{useNewUrlParser: true},(error,client)=>{
    if(error){
        return console.log('Error occured during connection ',error);
    }
    const db=client.db(databaseName);

    db.collection('users').deleteOne({
        //age: 23
        _id: new ObjectID('5ca303738504ee1e39513ffb')
    }).then((result)=>{
        console.log('The deleted count is \t',result.deletedCount);
    }).catch((error)=>{
        console.log('Something went wrong');
    });

    //Let's use deleteMany()

    db.collection('users').deleteMany({
        age: 23
    }).then((result)=>{
        console.log('Total documents deleted\t',result.deletedCount);
    }).catch((reject)=>{
        console.log('Something went wrong\n',reject);
    })
})