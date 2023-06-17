//import { model } from 'mongoose'
import { model } from '@ioc:Mongoose'
import { ClientDocument } from '../Interfaces'
import { ClienteSchema } from '../Schema/Cliente'

export default model<ClientDocument>('Client', ClienteSchema)
