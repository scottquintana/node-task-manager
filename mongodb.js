const { MongoClient, ObjectId } = require('mongodb')



const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, (error, client) => {
  if (error) {
    return console.log('Unable to connect to database');
  }

  const db = client.db(databaseName)

  // db.collection('tasks').deleteOne({
  //   description: 'Mow the lawn'
  // }).then((result) => {
  //   console.log(result);
  // }).catch((error) => {
  //   console.log(error);
  // })

  // db.collection('users').deleteMany({
  //   age: 39
  // }).then((result) => {
  //   console.log(result);
  // }).catch((error) => {
  //   console.log(error);
  // })

  // db.collection('tasks').updateMany({
  //   completed: false
  // }, {
  //   $set: {
  //     completed: true
  //    }
  // }).then((result) => {
  //   console.log(result.modifiedCount);
  // }).catch((error) => {
  //   console.log(error);
  // })
  

  // db.collection('users').insertMany([
  //   {
  //     name: 'Rick',
  //     age: 47
  //   },
  //   {
  //     name: 'Bob',
  //     age: 18
  //   }
  // ], (error, result) => {
  //   if (error) { return console.log('There was an error') }
  //   console.log(result.insertedIds);
  // })

  // db.collection('tasks').insertMany([
  //   {
  //     description: 'Mow the lawn',
  //     completed: false
  //   }, {
  //     description: 'Eat cheese',
  //     completed: true
  //   }, {
  //     description: 'Learn Mongo',
  //     completed: false
  //   }
  // ], (error, result) => {
  //   if (error) { return console.log('Error inserting')}
  //   console.log(result.ops);
  // })

})
