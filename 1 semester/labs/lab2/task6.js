const average = (a, b) => (a + b) / 2

const square = x => x * x

const cube = x => x * x * x

const calculate = () => {
  const result = []

  for (let i = 0; i <= 9; i++) {
    result.push(average(square(i), cube(i)))
  }

  return result
}

console.dir(calculate())