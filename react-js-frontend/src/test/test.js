fetchData(
    "http://localhost:8080/foodMenus",
    "satya",
    "password").then(data => console.dir(data, {depth: null}))