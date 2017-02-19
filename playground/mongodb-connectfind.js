//const MongoClient=require('mongodb').MongoClient;

const { MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
if(err){
return console.log('umable to connect')
}
console.log('Connected to Mongodb server');

db.collection('Users').find({name:'srinath1'}).toArray().then((docs)=>{
	
	
	console.log(JSON.stringify(docs,undefined,2));
},(err)=>{
	console.log(err);
});

//db.close();
});
