const ipFormatter = ip => ip
  .trim()
  .split(".")
  .map(str => parseInt(str))
  .reduce((prev, acc) => (prev << 8) + acc, 0)

console.dir(ipFormatter("127.0.0.1"))
console.dir(ipFormatter("192.168.1.10"))