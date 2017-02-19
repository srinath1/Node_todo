const {objectID}=require('mongoose');

const {mongoose} = require('./mongoose');
const {Todo} = require('./../models/todo');
const {User} = require('./../models/user');
User.findById('58a4a5dde0e5260bf4338803').then((users)=>{
if(!users){
return console.log('unable to  found');
}
console.log('Todos by id',users);
}).catch((e)=>console.log(e));




