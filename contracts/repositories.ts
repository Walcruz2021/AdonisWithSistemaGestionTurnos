
/*
 * AchievementRepository module
 */
declare module '@ioc:Adonis/Core/AchievementRepository' {
  import { AchievementRepositoryContract } from 'App/Core/Achievement/Infrastructure/Contracts'
  const AchievementRepository: AchievementRepositoryContract
  export default AchievementRepository
}
