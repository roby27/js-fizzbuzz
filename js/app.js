let listaElement = document.getElementById("lista");

for (let i = 0; i < 100; i++) {
  if ((i + 1) % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
    listaElement.innerHTML = listaElement.innerHTML + "<li>FizzBuzz</li>";
  } else if ((i + 1) % 3 === 0) {
    console.log("Fizz");
    listaElement.innerHTML = listaElement.innerHTML + "<li>Fizz</li>";
  } else if ((i + 1) % 5 === 0) {
    console.log("Buzz");
    listaElement.innerHTML = listaElement.innerHTML + "<li>Buzz</li>";
  } else {
    console.log(i + 1);
    listaElement.innerHTML =
      listaElement.innerHTML + "<li>" + (i + 1) + "</li>";
  }
}
