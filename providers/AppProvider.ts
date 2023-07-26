import Application, { ApplicationContract } from '@ioc:Adonis/Core/Application'
export default class AppProvider {
  constructor(protected app: ApplicationContract) {}

  public async register() {

    //Register Module Client
    const { default: Client } = await import(
      'App/Core/Client/Infrastructure/Mongoose/Model/Client'
    )
    const { default: ClientRepository } = await import(
      'App/Core/Client/Infrastructure/Mongoose/Repositories/ClientRepository'
    )


    this.app.container.singleton(
      'Adonis/Core/AchievementRepository',
      () => new ClientRepository(Client)
    )
  }

  public async boot() {
    // IoC container is ready
  }

  public async ready() {
    // App is ready
  }

  public async shutdown() {
    // Cleanup, since app is going down
  }
}
