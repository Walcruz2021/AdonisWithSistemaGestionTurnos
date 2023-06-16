import {model} from "mongoose"
import {ClientsDocument} from "../Interface"
import {clienteSchema} from "../Schema/cliente"

export default model<ClientsDocument>('Client',clienteSchema)
