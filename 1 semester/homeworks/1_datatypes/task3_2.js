const counter = (arr, hash) => {
    for (const item of arr) {
        let type = typeof item;

        if (!hash[type]){
            hash[type] = 1
        } else {
            hash[type]++
        }
    }
}

const hash = {}

const arr = [
    0,
    1,
    100.001,
    "",
    "str",
    `${2 + 2}`,
    2 + "3",
    true,
    false,
    !0,
    0 || 1,
    null,
    undefined,
    NaN,
    Infinity,
    [ 1, 2, 3 ],
    {
        a: 1,
        b: 2
    },
    () => {},
    console.log,
    1n,
    Symbol("2")
]

counter(arr, hash)

console.dir(hash)
