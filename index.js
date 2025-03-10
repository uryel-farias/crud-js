const botaoAdicionar = document.querySelector("#adicionar-item");

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
    
})

