import gerarDiaDaSemana from "./gerarDiaDaSemana.js";

let contador = 0;

export function criarItemDaLista() {
    
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

    inputCheckBox.addEventListener("click", function(){
        if(inputCheckBox.checked) {
            nomeItem.style.textDecoration = "line-through";
        }  else {
            nomeItem.style.textDecoration = "none";
        }
    })

    
    containerItemDaLista.appendChild(inputCheckBox);
    containerItemDaLista.appendChild(nomeItem);
    
    itemDaLista.appendChild(containerItemDaLista);
    const dataCompleta = gerarDiaDaSemana();
    
    const itemData = document.createElement("p");
    itemData.innerText = dataCompleta;
    itemData.classList.add("texto-data");
    itemDaLista.appendChild(itemData);

    return itemDaLista;

}