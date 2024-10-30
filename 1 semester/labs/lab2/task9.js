const phoneBook = [
  {
    name: "Pasha",
    phone: "+3801234567890"
  },
  {
    name: "Name1",
    phone: "+3801234567891"
  },
  {
    name: "Name2",
    phone: "+3801234567892"
  },
]

const findPhoneByName = name => phoneBook.find(item => item.name === name)

console.dir(findPhoneByName("Pasha"))
console.dir(findPhoneByName("Name1"))
console.dir(findPhoneByName("Name2"))