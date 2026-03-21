import './style.css'

function CreateCard({titulo, descricao, cor}) {
    return (
        <div className="dyCard" style={{border: `2.5px solid ${cor}`, color: cor}}>
            <h3 className="dyCardT">{titulo}</h3>
            <p className="dyCardP">{descricao}</p>
        </div>
    )
}

function Card({ txtCards }) {
    return (
        <div className="cardContainer">
            {txtCards.map((c) => (
                <CreateCard
                    key={c.id} 
                    titulo={c.titulo} 
                    descricao={c.descricao} 
                    cor={c.cor}/>
            ))}
        </div>
    )
}

export default Card