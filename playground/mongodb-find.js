//const MongoClient=require('mongodb').MongoClient;

const {MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db)=>{
  if(err){
    return console.log('Unable to connect to mongo db server');
  }
  console.log('connected to mongo db server');

db.collection('Users').find({name:'Jen'}).toArray().then((docs)=>{
  console.log('Todos');
  console.log(JSON.stringify(docs,undefined,2));
},(err)=>{
  console.log("unable to fetch todos",err);
});

/*db.collection('Todos').find().count().then((count)=>{
  console.log('Todos count: '+count);

},(err)=>{
  console.log("unable to fetch todos",err);
});*/
//db.close();
});
