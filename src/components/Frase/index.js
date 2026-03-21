import { useState, useEffect } from 'react'
import './style.css'

function Frase({frases}) {
    const [txt, setTxt] = useState(frases[0])
    const [visivel, setVisivel] = useState(true)

    useEffect(() => {
        const intervalo = setInterval(() => {
            setVisivel(false)

            setTimeout(() => {
                setTxt(frases[Math.floor(Math.random() * frases.length)])
                setVisivel(true)
            }, 500) // tempo do fade out antes de trocar

        }, 5000)

        return () => clearInterval(intervalo)
    }, [])

    return (
        <div className="dyDivFrase">
            <p className={`dyPFrase ${visivel ? 'visivel' : 'invisivel'}`}>{txt}</p>
        </div>
    )
}

export default Frase