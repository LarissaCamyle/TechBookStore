import { exibirLivrosNaTela } from "./ExibirLivros.js";
import { aplicarDesconto } from "./DescontoLivros.js";

//passando o import para que funcione o codigo
import { filtrarLivros} from "./FiltrarCategoria.js"
import { filtrarPorPreco } from "./FiltrarPreco.js"

let livros = []
const endpointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';

getBuscarLivrosDaAPI();

export function getLivros(){
    return livros;
}

async function getBuscarLivrosDaAPI () {
                    //busca na api
    const resposta = await fetch(endpointDaAPI);
    livros = await resposta.json();
    //altera o preco no json
    let livrosComDesconto = aplicarDesconto(livros);

    //printa os livros na tela
    exibirLivrosNaTela(livrosComDesconto);
}



