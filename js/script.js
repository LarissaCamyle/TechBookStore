import { exibirLivrosNaTela } from "./ExibirLivros.js";
import { aplicarDesconto } from "./DescontoLivros.js";

let livros = []
const endpointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';

getBuscarLivrosDaAPI();


async function getBuscarLivrosDaAPI () {
                    //busca na api
    const resposta = await fetch(endpointDaAPI);
    livros = await resposta.json();
    //altera o preco no json
    let livrosComDesconto = aplicarDesconto(livros);

    //printa os livros na tela
    exibirLivrosNaTela(livrosComDesconto);
}





