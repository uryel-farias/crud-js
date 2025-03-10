const botaoAdicionar = document.querySelector("#adicionar-item");
const listaDeCompras = document.querySelector("#lista-de-compras");
let contador = 0;

botaoAdicionar.addEventListener("click",(evento) => {
    evento.preventDefault();
    
    const inputItem = document.querySelector("#input-item").value;

    if (inputItem == "") {
        alert("Por favor insira um item!")
        return
    } 

    const itemDaLista = document.createElement("li");
    const containerItemDaLista = document.createElement("div");
    containerItemDaLista.classList.add("lista-item-container");

    const inputCheckBox = document.createElement("input");
    inputCheckBox.type = "checkbox";
    inputCheckBox.id = "checkbox-" + contador++;

    const nomeItem = document.createElement("p");
    nomeItem.innerText = inputItem;

    containerItemDaLista.appendChild(inputCheckBox);
    containerItemDaLista.appendChild(nomeItem);

    itemDaLista.appendChild(containerItemDaLista);
    listaDeCompras.appendChild(itemDaLista);






}) 

