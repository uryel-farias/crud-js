const botaoAdicionar = document.querySelector("#adicionar-item");

botaoAdicionar.addEventListener("click",(evento) => {
    evento.preventDefault();
    
    const inputItem = document.querySelector("#input-item").value;
    console.log(inputItem);
})

