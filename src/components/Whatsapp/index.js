import './style.css'
import { useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa'

function Whatsapp(){
    const [msg, setMsg] = useState("")

    function enviarMsg(e){
        e.preventDefault()

        const numero = '5599999999999'
        const txt = encodeURIComponent(msg)
        const url = `https://wa.me/${numero}?text=${txt}`

        window.open(url, '_blank')
    }

    return (
        <form onSubmit={enviarMsg} className="formWhats">
            <label className="labelWhats">Enivar mensagem por Whatsapp:</label>

            <textarea className="textWhats"
                placeholder="Digite sua mensagem"
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
            />

            <button type="submit" className="buttonWhats"> <FaWhatsapp />Iniciar conversa</button>
        </form>
    )
}

export default Whatsapp