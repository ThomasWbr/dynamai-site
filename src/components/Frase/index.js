import './style.css'

function Frase(props) {
    return (
        <div className="dyDivFrase">
            <p className="dyPFrase">{props.texto}</p>
        </div>
    )
}

export default Frase