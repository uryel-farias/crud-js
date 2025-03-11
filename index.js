import { criarItemDaLista } from "./scripts/criarItemDaLista.js";

const listaDeCompras = document.querySelector("#lista-de-compras");
const botaoAdicionar = document.querySelector("#adicionar-item");


botaoAdicionar.addEventListener("click",(evento) => {
    evento.preventDefault();
    const itemDaLista = criarItemDaLista();
    listaDeCompras.appendChild(itemDaLista);

    veridicarListaVazia();

}) 

const mensagemListaVazia = document.querySelector(".mensagem-lista-vazia");

function veridicarListaVazia () {
    const itensDalista = listaDeCompras.querySelectorAll("li");
    if(itensDalista.length === 0) {
        mensagemListaVazia.style.display = "block";
    } else {
        mensagemListaVazia.style.display = "none";
    }
}

veridicarListaVazia();