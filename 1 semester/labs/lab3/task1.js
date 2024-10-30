const random = (min, max) => {
  if (max === undefined) {
    max = min
    min = 0
  }

  return min + Math.floor((max - min + 1) * Math.random())
}

for (let i = 0; i < 10; i++) {
  console.dir(random(12, 16))
}

for (let i = 0; i < 10; i++) {
  console.dir(random(0, 7))
}