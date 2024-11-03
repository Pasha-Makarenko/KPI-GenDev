const Types = new Map([
  [ Number, "number" ],
  [ String, "string" ],
  [ Boolean, "boolean" ],
  [ BigInt, "bigint" ],
  [ Symbol, "symbol" ],
  [ Object, "object" ],
  [ Function, "function" ],
  [ undefined, "undefined" ],
])

const contract = (fn, ...types) => (...args) => {
  for (let i = 0; i < args.length; i++) {
    if (typeof args[i] !== Types.get(types[i])) {
      throw new Error("Unexpected argument")
    }
  }

  const result = fn(...args)

  if (typeof result !== Types.get(types[types.length - 1])) {
    throw new Error("Unexpected argument")
  }

  return result
}

const add = (a, b) => a + b
const addNumbers = contract(add, Number, Number, Number)
const res1 = addNumbers(2, 3)
console.dir(res1)

const concat = (s1, s2) => s1 + s2
const concatStrings = contract(concat, String, String, String)
const res2 = concatStrings("Hello ", "world!")
console.dir(res2)