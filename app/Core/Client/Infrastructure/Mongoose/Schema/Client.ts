import { Schema } from '@ioc:Mongoose'

//export const clienteSchema:Schema = new Schema({

export const ClientSchema:Schema = new Schema({
  _id: { type: Schema.Types.ObjectId, required: false },
  envImpactIndex: {
    type: Schema.Types.ObjectId,
    ref: 'EnvImpactIndex'
  },
  name: { type: String, require: true },
  // nameDog:{type:String,require:true},
  phone: { type: Number, require: true },
  address: { type: String, require: true },
  notesCli: { type: String, require: true },
  turnos: [{ type: Schema.Types.ObjectId, ref: 'Turno' }],
  pedidos: [{ type: Schema.Types.ObjectId, ref: 'Venta' }],
  perros: [{
    type: Schema.Types.ObjectId,
    ref: 'Perro',
    nameDog: String
  }],
  status:{type:Boolean,default:true}
})

