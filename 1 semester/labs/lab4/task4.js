const sum = (...args) => {
  if (args.length === 0) {
    return 0
  }

  let result = 0,
    i = 0

  do {
    result += args[i++]
  } while (i < args.length)

  return result
}

const a = sum(1, 2, 3)
const b = sum(0)
const c = sum()
const d = sum(1, -1, 1)
const e = sum(10, -1, -1, -1)

console.dir({ a, b, c, d, e })