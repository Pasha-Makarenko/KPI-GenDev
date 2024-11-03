const difference = (arr1, arr2) =>
  arr1.filter(item => !arr2.includes(item))

const array1 = [7, -2, 10, 5, 0]
const array2 = [0, 10]
const result1 = difference(array1, array2)
console.log(result1)

const array3 = ["Beijing", "Kiev"]
const array4 = ["Kiev", "London", "Baghdad"]
const result2 = difference(array3, array4)
console.log(result2)