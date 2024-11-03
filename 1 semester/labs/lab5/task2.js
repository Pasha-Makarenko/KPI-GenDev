const array = () => {
  const data = [],
    proto = i => data[i]

  proto.push = item => data.push(item)
  proto.pop = () => data.pop()

  return proto
}

const arr = array()

arr.push("first")
arr.push("second")
arr.push("third")

console.log(arr(0))
console.log(arr(1))
console.log(arr(2))

console.log(arr.pop())
console.log(arr.pop())
console.log(arr.pop())

console.log(arr.pop())