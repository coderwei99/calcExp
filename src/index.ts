import { canReachTargetExperience } from "./core";
import { logger } from "./logger";

// // 正常情况: 预留容错
// const startTime = '2025-01-4 12:00:00'
// const endTime = '2025-01-4 12:00:00'
// const recoveryPer5Min = 6  // 每多少分钟可以恢复1点体力
// const dailyFixedStamina = 600 // 每天固定买的体力 12体
// const extraDailyStamina = 550 // 每天额外的体力 300 拉面 + 150 月卡 + 50 一轮铜币 + 50 好友
// const extraDailyExp = [75000, 60000] // 每天额外获得的丰饶和宝箱经验值
// const extraStamina = ((30 + 50 + 80 + 80 + 150) * 7) + 300 // 体力特惠 + 300月卡(存货)
// const extraStaminaExp = 60000 // 祈愿所得经验值
// const staminaExp = 120 // 1体力可换算的经验值 106级的标准




// 极限情况:
const startTime = '2025-02-20 10:00:00'; // 2025年1月4日11点
const endTime = '2025-04-22 10:00:00'; // 2025年1月11日21点
const recoveryPer5Min = 6;  // 每多少分钟可以恢复1点体力
const dailyFixedStamina = 150; // 每天固定买的体力 12体
const extraDailyStamina = 400; // 每天额外的体力 300 拉面 + 150 月卡 + 50 一轮铜币 + 50 好友
const extraDailyExp = [75000, 60000]; // 每天额外获得的丰饶和宝箱经验值
const extraStamina = 0; // 体力特惠  + 100v7周礼包
const extraStaminaExp = 0; // 祈愿所得经验值
const staminaExp = 123; // 1体力可换算的经验值 106级的标准

canReachTargetExperience({
  currentLevel: 121,
  currentExp: 0,
  targetLevel: 130,
  // currentLevel: 102,
  // currentExp: 0,
  startTime,
  endTime,
  recoveryPer5Min,
  dailyFixedStamina,
  extraDailyStamina,
  extraDailyExp,
  extraStamina,
  staminaExp,
  extraStaminaExp,
  callback: logger
});

// 600 + 300 + 150 + 50 + 240 + 390 = 1730


// 690208 + 754769+ 827600 + 905061 - 222163

// 2,955,475