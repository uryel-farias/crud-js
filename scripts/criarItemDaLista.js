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

    const diaDaSemana = new Date().toLocaleDateString("pt-BR", {weekday:"long"});

    const data = new Date().toLocaleDateString("pt-BR");

    const hora = new Date().toLocaleTimeString("pt-BR",{
        hour: "numeric",
        minute: "numeric"
        } );

    const dataCompleta = `${diaDaSemana} (${data}) às ${hora}`;
    const itemData = document.createElement("p");
    itemData.innerText = dataCompleta;
    itemData.classList.add("texto-data");
    itemDaLista.appendChild(itemData);

    return itemDaLista;

}