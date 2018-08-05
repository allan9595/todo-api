const {MongoClient , ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if(err){
    return console.log('Unable to connect to Mongodb Server');
  }
  console.log('connected to Mongodb server');
  const db = client.db('TodoApp');
  db.collection('User').findOneAndUpdate({
    _id:new ObjectID('5b6753a414f3ba0f77700352')
  },{
    $set: {
      name:'allan chang'
    },
    $inc: {age: +2}
  },{
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });
  client.close();
});
