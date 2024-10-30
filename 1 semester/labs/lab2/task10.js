const phoneBook = {
  "Pasha": "+3801234567890",
  "Name1": "+3801234567891",
  "Name2": "+3801234567892"
}

const findPhoneByName = name => phoneBook[name]

console.dir(findPhoneByName("Pasha"))
console.dir(findPhoneByName("Name1"))
console.dir(findPhoneByName("Name2"))