export function translateNum(num){
  let tmp = num
  let parts = []
  if(num > 20 && num < 100){
    tmp = num % 10
    parts.push(num - tmp)
    if(tmp > 0){
      parts.push(tmp)
    }
    return parts.map(p => numWordMap[p]).join(' ')
  }

  return numWordMap[num] || "unknown"
}
const numWordMap = {
  1:"one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
  10: "ten",
  20: "twenty",
  30: "thirty",
  40: "fourty",
  50: "fifty",
  60: "sixty",
  70: "seventy",
  80: "eighty",
  90: "nity",
}
