import { BaseCommand } from '@adonisjs/core/build/standalone'
import AchievementRepository from 'App/Core/Achievement/Infrastructure/Mongoose/Repositories'

export default class DeleteSignerAchievement extends BaseCommand {
  /**
   * Command name is used to run the command
   */
  public static commandName = 'add:prueba:achievement'
  /**
   * Command description is displayed in the "help" output
   */
  public static description = 'This command delete signer achievement'

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

  /**
   *
   * @param number index
   * @param number index
   *
   * @returns
   */

  public async run() {
    this.logger.success('Started delete signer achievement')
    try {
      if (this.rollbackCommand) {
        this.logger.success('Started rollback delete signer achievement')
      } else {
        await this.execute()
      }
    } catch (error) {
      this.logger.error(`Error Message: ${error.message}`)
      this.logger.error(`Error: ${error}`)
    }
    this.logger.logUpdatePersist()
    this.logger.success('Delete signer achievement Success')
  }

  public async execute(): Promise<void> {
    let data: string = '5fcc2a10b71a745cbab2426d'

    let findAchievement = await AchievementRepository.findOne({
      _id: data
    })
    console.log(findAchievement)
  }
}
