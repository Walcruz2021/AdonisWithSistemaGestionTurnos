import { BaseCommand } from '@adonisjs/core/build/standalone'
import ClientRepository from 'App/Core/Client/Infrastructure/Mongoose/Repositories'
import listClients from "../../dataClients.json"
//aqui vamos a importar listado de clientes (se va a llamar listClients)

export default class DeleteClient extends BaseCommand {
  /**
   * Command name is used to run the command
   */
  public static commandName = 'delete:client'

  /**
   * Command description is displayed in the "help" output
   */
  public static description = 'This command delete client'

  public static settings = {
    /**
     * Set the following value to true, if you want to load the application
     * before running the command
     */
    loadApp: true,

    /**
     * Set the following value to true, if you want this command to keep running until
     * you manually decide to exit the process
     */
    stayAlive: false
  }

private processingProgressBar(index:number, limit:number):number{
  if(index<limit){
    index++
  }
  return index
}

  public async run() {
    this.logger.success('Started delete Client')
    try {
      await this.execute()
    } catch (error) {
      this.logger.error(`Error Message:${error.message}`)
      this.logger.error(`Error:${error}`)
    }
    this.logger.logUpdatePersist()
    this.logger.success('Update activity success')
  }

  private async execute(): Promise<void> {
   let i:number=0
    
   for (let item of listClients){
      console.log(item.idClient)
      const findClient=await ClientRepository.findOne({
        _id:item.idClient
      }
      )
      if(findClient){
        console.log(findClient)
      }else console.log("no hay cliente")
    i=this.processingProgressBar(i,listClients.length)
    }
  }
}
