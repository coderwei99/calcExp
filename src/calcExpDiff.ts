import { EXP_PER_LEVEL } from './exp'

// 计算经验差
export function calcExpDiff(currentLevel: number,currentExp: number, targetLevel: number = 110) {
 console.log('106级经验差', EXP_PER_LEVEL[targetLevel] - EXP_PER_LEVEL[currentLevel] - currentExp);
 return EXP_PER_LEVEL[targetLevel] - EXP_PER_LEVEL[currentLevel] - currentExp
}
