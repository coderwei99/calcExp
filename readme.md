# 项目介绍

主要用于计算两个时间节点火影忍者手游能否达到目标等级

## 参数介绍
```typescript
interface ParamsType {
    currentLevel: number; // 当前等级
    targetLevel?: number; // 目标等级, 默认110
    currentExp: number; // 当前拥有经验
    startTime: string; // 开始时间 格式为`2025-01-4 10:00:00`
    endTime: string; // 结束时间 格式同上,
    recoveryPer5Min: number; // 多少分钟恢复一点体力 当前版本是6分钟1点体力,
    dailyFixedStamina: number; // 每天固定买多少体力,
    extraDailyStamina: number; // 每天额外能够获得的体力(拉面/好友/月卡/铜币),
    extraDailyExp: number[]; // 每天直接获得的经验值,
    extraStamina: number; // 这个时间周期内通过游戏外或者游戏内直接/间接能获得的体力 比如说碰上体力特惠7天多获取的体力,
    staminaExp: number; // 1点体力等级换算成的经验值,
    extraStaminaExp: number; // 同上 直接间接获取的经验值 比如说每周祈愿获得的经验值 一周只有一次,
    callback: (startTime: string, endTime: string, expDiff: number, totalExperience: number, days: number, staminaExp: number) => void; // 回调 如果输出计算的结果
  }
```