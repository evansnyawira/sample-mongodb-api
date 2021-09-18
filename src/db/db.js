import { MongoClient } from "mongodb";
const MY_DB = 'sampleApi'
export const db = {
  _mdbClient: null,
  connect: async function(url) {
    const client = await MongoClient.connect(url, {
      maxPoolSize: 10,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    this._mdbClient = client;
  },
  getConnection: function() {
    if(!this._mdbClient) {
      console.log('you need to call the connect function or your db is not working properly');
      process.exit(1);
    }
    return this._mdbClient.db(MY_DB);
  }
}

