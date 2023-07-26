//import {model} from "mongoose"
import { model } from '@ioc:Mongoose'

import {ClientSchema} from "../Schema/Client"
import {ClientDocument} from "../Interfaces"

export default model<ClientDocument>('Client',ClientSchema)
