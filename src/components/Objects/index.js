import './Objects.css'

const produtos = [
    { id: 1, nome: "Notebook", preco: 3500 },
    { id: 2, nome: "Mouse", preco: 150},
    { id: 3, nome: "Teclado", preco: 250 },
    { id: 4, nome: "Capinha", preco: 30 }
]

function Objects(){
    return(
        <ul className="ulObjects">
            {produtos.map(
                (produto) => (<li key={produto.id}> {produto.nome} - R$ {produto.preco}</li>)
            )}
        </ul>
    );
}

export default Objects