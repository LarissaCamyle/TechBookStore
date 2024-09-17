export function aplicarDesconto (livro){
    const desconto = 0.3;

    const livrosComDesconto = livro.map(livro => {
        //faz uma copia do livro porem altera o preco
        return{...livro, preco: (livro.preco - (livro.preco * desconto))}
    })

    return livrosComDesconto;
}