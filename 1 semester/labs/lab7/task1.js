const removeElement = (arr, item) =>
  arr.includes(item)
  && arr.splice(arr.indexOf(item), 1)

const array1 = [1, 2, 3, 4, 5, 6, 7]
removeElement(array1, 5)
console.log(array1)

const array2 = ["Kiev", "Beijing", "Lima", "Saratov"]
removeElement(array2, "Lima")
removeElement(array2, "Berlin")
console.log(array2)