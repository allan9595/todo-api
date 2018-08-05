const {MongoClient , ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if(err){
    return console.log('Unable to connect to Mongodb Server');
  }
  console.log('connected to Mongodb server');
  const db = client.db('TodoApp');
  /*db.collection('Todos').insertOne({
    text:'SOME THING TO DO',
    completed: false
  },(err,result) => {
    if(err){
      return console.log('Unable to insert todo',err);
    }
    console.log(JSON.stringify(result.ops, undefined, 2));
  });
  client.close();*/
  db.collection('User').insertOne({
    name:'allan chang',
    age:23,
    location: 'denton'
  },(err, result) => {
    if(err){
      return console.log('Unable to insert to do', err);
    }
    console.log(JSON.stringify(result.ops,undefined,2));
    console.log(result.ops[0]._id.getTimestamp());
  });
  client.close();
});
