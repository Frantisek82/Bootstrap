let cajaVerde = document.querySelectorAll(".dragtarget");
let cajaAzul = document.querySelector("#droptarget");
let carro = document.querySelector("#carro");

// cajaVerde.addEventListener("click", () => {
//   console.log("divVerde");
// });
cajaAzul.addEventListener("click", () => {
  console.log("divAzul");
});

let text = "";
let itemArrastrado = null;
cajaVerde.forEach((caja) => {
  caja.addEventListener("dragstart", (event) => {
    itemArrastrado = event.target;
    text = event.target.textContent;
    // console.log(itemArrastrado);
  });
});
// Drag events para el elemento arrastrable
// cajaVerde.addEventListener("dragstart", (event) => {
//   console.log("eventoDragStart");
//   itemArrastrado = event.target;
//   console.log(itemArrastrado);
// });
// cajaVerde.addEventListener("drag", (event) => {
//   console.log("drag");
// });
// cajaVerde.addEventListener("dragend", (event) => {
//   console.log("dragEnd");
// });

// Drop events para el elemento que puede recibir a otro sea arrastrado
cajaAzul.addEventListener("dragenter", (event) => {
  event.preventDefault();
  console.log("dragEnter");
});
cajaAzul.addEventListener("dragover", (event) => {
  event.preventDefault();
  console.log("dragOver");
});
cajaAzul.addEventListener("drop", (event) => {
  //   console.log(event.target);
  //   console.log("drop");
  console.log(itemArrastrado);
  let span = document.createElement("span");
  span.innerHTML = itemArrastrado.textContent;
  carro.appendChild(span);
  carro.classList.add("visible");
  setTimeout(() => {
    carro.classList.remove("visible");
  }, 2000);
  itemArrastrado.innerHTML = "";
  event.target.textContent = text;
});
cajaAzul.addEventListener("dragleave", (event) => {
  console.log("dragLeave");
});
