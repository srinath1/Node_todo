//const MongoClient=require('mongodb').MongoClient;

const { MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
if(err){
return console.log('umable to connect')
}
console.log('Connected to Mongodb server');

db.collection('Todos').findOneAndUpdate({_id:new ObjectID("58a200b8bcf6b90d0c619ab2")},
	{
		$set:{
		completed:true}
	},{
		returnOriginal:false;
	})




).then((result)=>{
	console.log(result);

//db.close();
});
})