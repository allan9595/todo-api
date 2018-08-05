const {MongoClient , ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if(err){
    return console.log('Unable to connect to Mongodb Server');
  }
  console.log('connected to Mongodb server');
  const db = client.db('TodoApp');
  db.collection('Todos').deleteMany({text: 'walk my dog'}).then((result) => {
    console.log(result);
  });
  client.close();
});
