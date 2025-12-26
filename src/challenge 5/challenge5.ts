type ElfDateTime =
  `${number}*${number}*${number}@${number}|${number}|${number} NP`

type DateArray = [number, number, number, number, number, number]
export default function timeUntilTakeOff(
  fromTime: ElfDateTime,
  takeOffTime: ElfDateTime
): number {
  // All your code here
    const [year, month, day, hour, min, sec] = fromTime.match(/\d+/g)?.map(Number)
    const [year2, month2, day2, hour2, min2, sec2]= takeOffTime.match(/\d+/g)?.map(Number)

    const fromTimeDate = new Date(year, month - 1, day, hour, min, sec)
    const takeOffDate = new Date(year2, month2 - 1, day2, hour2, min2, sec2)

    console.log({fromTimeDate, takeOffDate})

    const diffSeconds = Math.floor((takeOffDate.getTime() - fromTimeDate.getTime()) / 1000);
    return diffSeconds
}