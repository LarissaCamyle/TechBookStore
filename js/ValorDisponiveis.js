export function calcularValorDisponiveis(livros){
    //comeca com zero e vai somando os precos               2 casas decimais 
    return livros.reduce((acc, livro) => acc + livro.preco, 0).toFixed(2);
}