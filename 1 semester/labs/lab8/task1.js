const iterate = (obj, callback) =>
  Object
    .entries(obj)
    .forEach(entry => callback(...entry))

const obj = { a: 1, b: 2, c: 3 }

iterate(obj, (key, value) => {
  console.dir({ key, value })
})