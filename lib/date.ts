import * as jalaali from "jalaali-js";

// this function get date and convert it to timestamp
export function date2Timestamp(date: Date): number {
  const specificDate:Date = new Date(date) 
  const timeStamp:number = specificDate.getTime()
  return timeStamp
}


export const getPersianMonth = (type: string): number => {
  const today = new Date();
  const jalaaliDate = jalaali.toJalaali(today);

  switch(type) {
    case "d":
      return jalaaliDate.jd;
    case "m":
      return jalaaliDate.jm;
    case "y":
      return jalaaliDate.jy;
    default:
      return 0    
  }
};
