// this function get date and convert it to timestamp
export function date2Timestamp(date: Date): number {
  const specificDate:Date = new Date(date) 
  const timeStamp:number = specificDate.getTime()
  return timeStamp
}
