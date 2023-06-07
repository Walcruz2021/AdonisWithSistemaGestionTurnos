import Application, { ApplicationContract } from '@ioc:Adonis/Core/Application'
export default class AppProvider {
  constructor(protected app: ApplicationContract) {}

  public async register() {

    //Register Module Achievement
    const { default: Achievement } = await import(
      'App/Core/Achievement/Infrastructure/Mongoose/Models/Achievement'
    )
    const { default: AchievementRepository } = await import(
      'App/Core/Achievement/Infrastructure/Mongoose/Repositories/AchievementRepository'
    )

    // const { default: FileStorage } = await import(
    //   'App/Core/Storage/File/FileStorage'
    // )
    // const { default: FileStorageRepository } = await import(
    //   'App/Core/Storage/File/FileStorageRepository'
    // )



    //Register Module Supply Version
    // const { default: CollectionVersion } = await import(
    //   'App/Core/CollectionVersion/Infrastructure/Mongoose/Models/CollectionVersion'
    // )
    // const { default: CollectionVersionRepository } = await import(
    //   'App/Core/CollectionVersion/Infrastructure/Mongoose/Repositories/CollectionVersionRepository'
    // )


    this.app.container.singleton(
      'Adonis/Core/AchievementRepository',
      () => new AchievementRepository(Achievement)
    )

    // this.app.container.singleton(
    //   'Ucropit/Core/CollectionVersionRepository',
    //   () => new CollectionVersionRepository(CollectionVersion)
    // )

    // this.app.container.singleton(
    //   'Ucropit/Core/StorageRepository',
    //   () => new FileStorageRepository(new FileStorage(Application.tmpPath()))
    // )

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
