import './style.css'

const headerOptions = ['HOME', 'DIÁRIA EXPRESS', 'ACTA', 'TABLINUM']

function Header(){
    return (
        <header className="header-dy">
            <div className="logo">
                <img src="images/logo-dynamai.png" alt="Logo da Dynamai" />
            </div>

            <ul className="ulHeader">
                {headerOptions.map( 
                    (txt) => (<li className="option"><p>{txt}</p></li>)
                )}
            </ul>
        </header>
    );
}

export default Header;