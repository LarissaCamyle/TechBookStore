import { exibirLivrosNaTela } from './ExibirLivros.js';
import { getLivros } from './script.js' 
import { calcularValorDisponiveis } from './ValorDisponiveis.js';

const btns = document.querySelectorAll(".btn");
const valorTotalDisponiveis = document.querySelector("#valor_total_livros_disponiveis");

btns.forEach(btn => btn.addEventListener('click', filtrarLivros))


export function filtrarLivros(){
    const btnId = document.getElementById(this.id);
    const categoria = btnId.value;

    let livros = getLivros(); 

    //se a categoria for disponivel mostra somente os disponiveis, se nao filtra pelo nome da categoria
    let livrosFiltrados = categoria === 'disponivel' 
        ? livros.filter(livro => livro.quantidade > 0) 
        : livros.filter(livro => livro.categoria === categoria);

    exibirLivrosNaTela(livrosFiltrados);

    if(categoria === 'disponivel'){
        const valorTotal = calcularValorDisponiveis(livrosFiltrados);
        console.log(valorTotal)
        exibirValorTotalDosLivrosDisponiveis(valorTotal);
    }

}

function exibirValorTotalDosLivrosDisponiveis(valorTotal){
    valorTotalDisponiveis.innerHTML = `
        <div class="livros__disponiveis">
        <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
      </div>
    `
}