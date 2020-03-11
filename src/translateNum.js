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
  }else if(num > 100){
    tmp = num % 10
    if(tmp > 0){//5
      parts.unshift(tmp)
    }
    tmp = num - tmp
    tmp = tmp % 100//20
    if(tmp > 0){
      parts.unshift(tmp)
    }
    tmp =

    parts.unshift()

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
  8: "seven",
  9: "seven",
  10: "ten",
  20: "twenty",
  50: "fifty",
}
