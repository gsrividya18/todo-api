const {mongoose}=require('./../server/db/mongoose');
const {Todo}=require('./../server/models/todo');
const {User}=require('./../server/models/user');
const {ObjectID}=require('mongodb');
/*var id='5af4243b13a7d090189b26a91';
if(!ObjectID.isValid(id)){
  console.log('ID not valid');
}*/

/*Todo.find({
  _id: id
}).then((todos)=>{
  console.log('Todos',todos);
});

Todo.findOne({
  _id: id
}).then((todo)=>{
  console.log('Todo',todo);
});*/

/*Todo.findById(id).then((todo)=>{
  if(!todo){
    return console.log('Id not found');
  }
  console.log('Todo by id',todo);
}).catch((e)=>console.log(e));*/
var id='5af3f75ce8ef856c12598f26';
User.findById(id).then((user)=>{
  if(!user){
    return console.log('User not found');
  }
  console.log(JSON.stringify(user,undefined,2));
}).catch((e)=>console.log(e));
