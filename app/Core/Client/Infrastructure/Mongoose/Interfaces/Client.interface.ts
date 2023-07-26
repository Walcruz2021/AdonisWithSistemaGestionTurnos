//import { Document } from 'mongoose'
import { Document } from '@ioc:Mongoose'
export interface Turnos {}
export interface Pedidos {}
export interface Perros {}

export interface Client {
  turnos: Turnos[]
  pedidos: Pedidos[]
  perros: Perros[]
  name: string
  phone: number
  address: string
  notesCli: string
  status: boolean
}

export type ClientDocument=Client & Document
//export type ClientsDocument=Clients & Document

//Esta interfaz define la estructura de los documentos de cliente en la base de datos.
//El objetivo de export type ClientsDocument = Clients & Document es crear un nuevo tipo llamado ClientsDocument 
//que combina las propiedades y tipos de las interfaces Clients y Document.
//al utilizar ClientsDocument, se pueden utilizar métodos y funciones proporcionadas por mongoose específicas para 
//manipular documentos en MongoDB, además de acceder a las propiedades definidas en la interfaz Clients.