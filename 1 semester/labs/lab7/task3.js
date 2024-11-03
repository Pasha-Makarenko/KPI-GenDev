// const unique = arr => Array.from(new Set(arr))
const unique = arr => arr
  .filter((item, i) => arr.indexOf(item) === i)

const result1 = unique([2, 1, 1, 3, 2])
console.log(result1)

const result2 = unique(["top", "bottom", "top", "left"])
console.log(result2)