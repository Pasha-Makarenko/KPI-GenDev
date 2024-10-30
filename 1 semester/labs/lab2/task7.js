const fn = () => {
  const obj1 = {
    name: "Pasha"
  }
  let obj2 = {
    name: "Pasha"
  }

  obj1.name = "New name"
  obj2.name = "New name"

  obj2 = {
    name: "Other name"
  }

  console.dir(obj1)
  console.dir(obj2)
}

fn()