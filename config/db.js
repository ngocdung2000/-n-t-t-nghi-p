const mongoose = require('mongoose');

const uri = `mongodb+srv://dungtran2000:f6lAAAL78uH4RBUX@cluster0.oukeivm.mongodb.net/?retryWrites=true&w=majority`;
// mongodb+srv://dungtran2000:f6lAAAL78uH4RBUX@cluster0.oukeivm.mongodb.net/?retryWrites=true&w=majority
async function connect() {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connecting successfully');
  } catch (error) {
    console.log('Connecting failure');
    process.exit(1);
  }
}

// const { MongoClient, ServerApiVersion } = require('mongodb');
// const client = new MongoClient(uri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   serverApi: ServerApiVersion.v1,
// });
// client.connect((err) => {
//   const collection = client.db('test').collection('devices');
//   // perform actions on the collection object
//   client.close();
// });
module.exports = {
  connect,
};
