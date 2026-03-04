import './style.css';

const nomes = [];

for (let i = 1; i <= 50; i++) {  
    nomes.push(`Nome${i}`);
}

const LIMITE = 13; // Define o número máximo de nomes exibidos

function Test() {
    return (
        <div className="divTest">
            <p className="pTest">Nomes:</p>
            <ul className="ulTest">
                {nomes.slice(0, LIMITE).map((nome, index) => (
                    <li className="liTest" key={index}>{nome}</li>
                ))}
                {nomes.length > LIMITE && <li className="liTest">{"[ ... ]"}</li>} {/* Exibe "..." se passar do limite */}
            </ul>
        </div>
    );
}

export default Test;
