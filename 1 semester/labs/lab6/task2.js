const compose = (...fns) => {
  const events = {
    error: []
  }

  const func = x => {
    if (fns.find(fn => typeof fn !== "function")
      && events.hasOwnProperty("error")) {
      events.error
        .forEach(cb => cb(new Error("Unexpected argument")))

      return
    }

    return fns.toReversed().reduce((prev, curr) => curr(prev), x)
  }

  func.on = (event, callback) => {
    events[event].push(callback)
    return func
  }

  return func
}

const inc = x => ++x
const twice = x => x * 2
const cube = x => x ** 3

const f1 = compose(cube, twice, inc)
const f2 = compose(cube, 2, inc)

f2
  .on("error", e => {console.log(e.message)})
  .on("error", e => {console.log("Something went wrong")})

f2.on("error", e => {console.log("Error")})

console.log(f1(5))
console.log(f2(5))