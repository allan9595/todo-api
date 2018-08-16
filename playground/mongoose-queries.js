const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');
var id = '5b6b4160354b0f192480f395';

User.findById(id).then((user) => {
  if(!user){
    return console.log('user not find');
  };
  console.log('User found:',user);

}).catch((e) => {
  console.log(e);
});
