import { exibirLivrosNaTela } from "./ExibirLivros.js";
import { getLivros } from "./script.js";

let btnOrdernarPorPreco = document.querySelector("#btnOrdenarPorPreco");

btnOrdernarPorPreco.addEventListener("click", filtrarPorPreco);

export function filtrarPorPreco(){
    let livros = getLivros();

    let livrosOrdenados = livros.sort((a,b) => a.preco - b.preco);

    exibirLivrosNaTela(livrosOrdenados);

}