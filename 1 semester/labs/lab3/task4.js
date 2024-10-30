const iface = {
  m1: x => [x],
  m2: function (x, y) {
    return [x, y]
  },
  m3(x, y, z) {
    return [x, y, z]
  },
  other: 123
}

const getSignature = obj => Object
  .entries(obj)
  .filter(([ key, value ]) => typeof value === "function")
  .map(([ key, value ]) => [ key, value.length ])

console.dir(getSignature(iface))