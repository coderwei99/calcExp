import { canReachTargetExperience } from "./calc";

const startTime = '2025-01-04T11:00:00' // 2025年1月4日早上11点
const endTime = '2025-01-11T12:00:00' // 2025年1月11日早上11点
const recoveryPer5Min = 6  // 每多少分钟可以恢复1点体力
const dailyFixedStamina = 600 // 每天固定获得的体力 14体
const extraDailyStamina = 500 // 每天额外的体力 300 拉面 + 150 月卡 + 50 一轮铜币
const extraDailyExp = [75000, 60000] // 每天额外获得的丰饶和宝箱经验值
const extraStamina = ((30 + 50 + 80 + 80 + 150) * 7) + 300 // 体力特惠 + 300月卡(存货)
console.log('extraStamina', extraStamina)
const extraStaminaExp = 60000 // 祈愿所得经验值
const staminaExp = 120 // 1体力可换算的经验值 106级的标准

console.log(
  canReachTargetExperience({
    currentLevel: 106,
    currentExp: 222163,
    startTime,
    endTime,
    recoveryPer5Min,
    dailyFixedStamina,
    extraDailyStamina,
    extraDailyExp,
    extraStamina,
    staminaExp,
    extraStaminaExp
  })
)

