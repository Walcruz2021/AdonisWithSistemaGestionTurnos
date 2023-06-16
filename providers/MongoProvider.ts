import type { ApplicationContract } from '@ioc:Adonis/Core/Application'
import { DATABASE_URL } from '../app/utils'
import Env from '@ioc:Adonis/Core/Env'
import { Mongoose } from 'mongoose'

export default class AppProvider {
  
  constructor(protected app: ApplicationContract) {}

  public register() {
    // Register your own bindings
    const mongoose = new Mongoose()

    mongoose.connect(Env.get(DATABASE_URL), {
      autoIndex: false,
      maxPoolSize: 10,
      serverSelectionTimeoutMS: 50000,
      socketTimeoutMS: 450000,
      family: 4,
      keepAlive: true
    })

    mongoose.connection.on('connected', () => {
      console.log('Connected to MongoDB')
    })
  
    mongoose.connection.on('error', (error) => {
      console.error('MongoDB connection error:', error)
    })

    
    this.app.container.singleton('Mongoose', () => mongoose)
  }

  public async boot() {
    // IoC container is ready
  }

  public async ready() {
    // App is ready
  }

  public async shutdown() {
    // Cleanup, since app is going down
    await this.app.container.use('Mongoose').disconnect()
  }
}
