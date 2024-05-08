function agregarElementos() {
  const input = document.getElementById("input").value;
  const lista = document.getElementById("lista");

  //pasos para crear elementos y asignar um valor de texto
  const elementoLista = document.createElement("li");
  elementoLista.textContent = input;
  lista.appendChild(elementoLista);
  const button = document.createElement("button");
  button.textContent = "borrar";
  elementoLista.appendChild(button);
  button.onclick = function () {
    lista.removeChild(elementoLista);
  };
}
