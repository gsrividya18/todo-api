const {mongoose}=require('./../server/db/mongoose');
const {Todo}=require('./../server/models/todo');
const {User}=require('./../server/models/user');
const {ObjectID}=require('mongodb');

  /*Todo.remove({}).then((result)=>{
    console.log(result);
  });*/

Todo.findByIdAndRemove('5af537b4be70e2e78de508b1').then((todo)=>{
  console.log(todo);
});
