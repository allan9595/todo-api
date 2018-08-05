const {MongoClient , ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if(err){
    return console.log('Unable to connect to Mongodb Server');
  }
  console.log('connected to Mongodb server');
  const db = client.db('TodoApp');
  db.collection('User').find({
    name:'allan chang'
  }).toArray().then((docs) => {
    console.log('Todos');
    console.log(JSON.stringify(docs,undefined,2));
  },(err) => {
    console.log('Unable to fetch todos',err);
  });
  client.close();
});
