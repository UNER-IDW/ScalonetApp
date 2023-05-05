import React from "react"; 

// Imagenes
import logoAfa from '../img/afa.png'

function Header() {
    return ( 
        <header> 
            <div className="img-logo-container">
                <a href="/home"><img className="img-logo" src={logoAfa} alt="logo-afa"/></a>
            </div>
            <nav>
                <ul className="list-without-style"> 
                    <li><a href="/jugadores"><h4>Nuestros Jugadores</h4></a></li> 
                    <li><a href="/convocatorias"><h4>Convocatorias</h4></a></li> 
                    <li><a href="/sobre-mi"><h4>M&aacute;s Info...</h4></a></li> 
                </ul>
            </nav>
        </header>
    )
} 

export default Header;