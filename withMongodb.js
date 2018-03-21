const MongoClient = require('mongodb').MongoClient;

const MONGO_URL = 'Your_DB_Path';

MongoClient.connect(MONGO_URL, (err, client) => {  
  if (err) {
    return console.log(err);
  }

  const db = client.db('db_name');

  // Do something with db here, like inserting a record
  db.collection('user').insertOne(
    {
        "name": "mlab",
        "job": "SDE",
        "exp": 1,
        "company": "github"
    },
    function (err, res) {
      if (err) {
        client.close();
        return console.error(err);
      }
      // Success
      client.close();
    }
  )
}); 