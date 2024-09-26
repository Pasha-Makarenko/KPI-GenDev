const SCALAR_TYPES = [ "number", "string", "boolean" ]

const initHash = hash => {
    for (const type of SCALAR_TYPES) {
        hash[type] = 0
    }
}

const counter = (arr, hash) => {
    initHash(hash)

    for (const item of arr) {
        if (SCALAR_TYPES.includes(typeof item)) {
            hash[typeof item]++
        }
    }
}

const hash = {}

const arr = [ true, "hello", 5, 12, -200, false, false, "word" ]
counter(arr, hash)

console.dir(hash)