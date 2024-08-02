export const replaceFaNum2EnNum = (number:string):string =>{
    return number
    //@ts-ignore
    .replaceAll(/۰/g, "0")
    .replaceAll(/۱/g, "1")
    .replaceAll(/۲/g, "2")
    .replaceAll(/۳/g, "3")
    .replaceAll(/۴/g, "4")
    .replaceAll(/۵/g, "5")
    .replaceAll(/۶/g, "6")
    .replaceAll(/۷/g, "7")
    .replaceAll(/۸/g, "8")
    .replaceAll(/۹/g, "9");
}
