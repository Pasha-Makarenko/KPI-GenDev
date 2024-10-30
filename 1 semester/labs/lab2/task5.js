const rangeOdd = (start, end) => {
  const result = [ start ]

  let value = start % 2 === 0 ? start + 1 : start + 2

  while (value <= end) {
    result.push(value)

    value += 2
  }

  if (end % 2 === 0) {
    result.push(end)
  }

  return result
}

console.dir(rangeOdd(15, 30))