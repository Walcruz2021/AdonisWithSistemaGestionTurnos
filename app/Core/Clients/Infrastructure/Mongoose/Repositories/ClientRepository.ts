import { ClientDocument } from '../Interfaces'
import { ClientRepositoryContract } from '../../Contracts'

export default class ClientRepository implements ClientRepositoryContract {
  constructor(private clientModel) {}

  public async findOne<Object>(query: Object): Promise<ClientDocument> {
    return this.clientModel.find(query)
  }

  public async findAll(
    //Si no se proporciona ningún valor para query, se utiliza un objeto vacío como consulta, lo que significa que
    //se buscarán todos los documentos de clientes en la base de datos.
    query: any = {},
    populate: any = []
  ): Promise<ClientDocument[]> {
    return this.clientModel.find(query).populate(populate)
  }

  public async count<Object>(query: Object): Promise<any> {
    return this.clientModel.count(query)
  }

  public async updateMany<Object>(
    query: Object,
    querySet: Object
  ): Promise<ClientDocument> {
    return this.clientModel.find(query, querySet)
  }

  public async findOneAndUpdate<Object>(
    query: Object,
    querySet: Object
  ): Promise<ClientDocument> {
    return this.clientModel.find(query, querySet)
  }
}
