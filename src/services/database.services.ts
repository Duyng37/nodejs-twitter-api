import { Collection, Db, MongoClient, ServerApiVersion } from 'mongodb'
import User from '~/models/schemas/User.schema'
import 'dotenv/config'

const uri = 'mongodb+srv://duyyng37:vilOZMFJ2I5RRNVY@twitter.34ytw.mongodb.net/?'

// Create a MongoClient with a MongoClientOptions object to set the Stable API version

class DatabaseService {
  private client: any = MongoClient
  private db: Db
  constructor() {
    this.client = new MongoClient(uri)
    this.db = this.client.db(process.env.DB_NAME)
  }

  async connect() {
    try {
      // Connect the client to the server	(optional starting in v4.7)
      // await client.connect()
      // Send a ping to confirm a successful connection
      await this.db.command({ ping: 1 })
      console.log('Pinged your deployment. You successfully connected to MongoDB!')
    } catch (error) {
      console.dir(error)
    }
  }

  get users(): Collection<User> {
    return this.db.collection(process.env.USERS_COLLECTION as string)
  }
}

const databaseService = new DatabaseService()
export default databaseService
