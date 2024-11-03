const sum = (...args) => args
  .reduce((prev, curr) => prev + curr, 0)

const a = sum(1, 2, 3)
const b = sum(0)
const c = sum()
const d = sum(1, -1, 1)
const e = sum(10, -1, -1, -1)

console.dir({ a, b, c, d, e })