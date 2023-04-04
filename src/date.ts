export const dayDiff = (date1: Date, date2: Date) => Math.ceil(Math.abs(date1.getTime() - date2.getTime()) / 86400000)

export const isWeekday = (date: Date) => date.getDay() % 6 !== 0
