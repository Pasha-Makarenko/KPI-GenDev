const pipe = (...fns) => {
  if (fns.find(fn => typeof fn !== "function")) {
    throw new Error("Unexpected argument")
  }

  return  x => fns
    .reduce((prev, curr) => curr(prev), x)
}

const inc = x => ++x
const twice = x => x * 2
const cube = x => x ** 3

const f1 = pipe(inc, twice, cube)
const f2 = pipe(inc, inc)

try {
  const f3 = pipe(inc, 7, cube)
} catch (error) {
  console.log(error)
}

console.log(f1(5))
console.log(f2(5))
console.log(f2(f2(5)))