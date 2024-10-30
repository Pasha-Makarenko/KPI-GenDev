const characters = "abcdefghijklmnopqrstuvwxyz0123456789"

const generateKey = (length, chars) => {
  let key = ""

  for (let i = 0; i < length; i++) {
    key += chars[Math.floor(chars.length * Math.random())]
  }

  return key
}

const key = generateKey(16, characters)

console.dir(key)