const max = matrix => matrix
  .flat()
  .reduce((oldMax, item) =>
    item > oldMax ? item : oldMax, 0)

const m = max([[1, 2, 3], [4, 5, 6], [7, 8, 9]])

console.log(m)