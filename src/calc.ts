import { calcExpDiff } from './calcExpDiff';
import { logger } from './logger'
export function canReachTargetExperience(
  { 
  // 当前等级 
  currentLevel,
  // 目标等级
  targetLevel = 110,
  // 已有经验
  currentExp,
   // 开始时间
   startTime,
   // 结束时间
   endTime,
   // 每多少分钟可以恢复1点体力
   recoveryPer5Min,
   // 每天固定获得的体力
   dailyFixedStamina,
   // 每天额外的体力
   extraDailyStamina = 0,
   extraDailyExp = [0, 0],
   // 意外所得体力
   extraStamina = 0,
   // 1体力可换算的经验值
   staminaExp = 120,
   // 意外所得经验值
   extraStaminaExp = 0
  }
 ) {
  const expDiff = calcExpDiff(currentLevel,currentExp, targetLevel)

   // 计算时间跨度（分钟）
   const start = new Date(startTime).getTime()
   const end = new Date(endTime).getTime()
 
   const timeDiffMinutes = (end - start) / (1000 * 60)
 
   // 每5分钟恢复的次数
   const recoveryTimes = timeDiffMinutes / recoveryPer5Min
   const recoveredStamina = recoveryTimes * 1
   console.log('自然恢复体力: ', recoveredStamina)
 
   // 计算每日体力
   const days = Math.ceil(timeDiffMinutes / (24 * 60))
   console.log('days', days)
 
   const totalDailyStamina = days * (dailyFixedStamina + extraDailyStamina)
 
   // 每日额外经验值
   const totalExtraDailyExp = days * extraDailyExp.reduce((sum, exp) => sum + exp, 0)
 
   // 总体力转换为经验值
   const totalStaminaExperience = (recoveredStamina + totalDailyStamina + extraStamina) * staminaExp
 
   // 总经验值
   const totalExperience = totalStaminaExperience + totalExtraDailyExp + extraStaminaExp
 
   // 判断是否达到目标经验值
   return logger(startTime, endTime, expDiff, totalExperience, days, staminaExp);
 }
 
 // 14637761 106
 // 15327969 107
 // 16082738 108
 // 16910338 109
 // 17815399 110
 
 
 // 100	101	468569	11875295
 // 101	102	486595	12361890
 // 102	103	511928	12873818
 // 103	104	544790	13418608
 // 104	105	585365	14003973
 // 105	106	633788	14637761
 // 106	107	690208	15327969
 // 107	108	754769	16082738
 // 108	109	827600	16910338
 // 109	110	905061	17815399
 
 // 690208+
 // 754769+
 // 827600+
 // 905061 = 3177638 - 207138 = 2970500