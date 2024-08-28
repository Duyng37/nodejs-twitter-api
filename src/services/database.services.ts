import { MongoClient, ServerApiVersion } from 'mongodb'

const uri = 'mongodb+srv://duyyng37:vilOZMFJ2I5RRNVY@twitter.34ytw.mongodb.net/?'

// Create a MongoClient with a MongoClientOptions object to set the Stable API version

class DatabaseService {
  private client: any = MongoClient
  constructor() {
    this.client = new MongoClient(uri)
  }
  async connect() {
    try {
      // Connect the client to the server	(optional starting in v4.7)
      // await client.connect()
      // Send a ping to confirm a successful connection
      await this.client.db('admin').command({ ping: 1 })
      console.log('Pinged your deployment. You successfully connected to MongoDB!')
    } finally {
      // Ensures that the this.client will close when you finish/error
      await this.client.close()
    }
  }
}

const databaseService = new DatabaseService()
export default databaseService
