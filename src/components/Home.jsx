import React from "react"; 

/* IMAGENES */
import imgCarrousel1 from "../img/imagen1.jpg"; 
import imgCarrousel2 from "../img/imagen2.jpg"; 
import imgCarrousel3 from "../img/imagen3.jpg";

function Home() {
    return(
        <div className="container-prueba"> 
            <h1>ScalonetApp</h1> 
            <hr/> 
            <div className="list-container">
                <h3>
                    "ScalonetApp" hace refencia al t&eacute;rmino popular "Scaloneta". 
                    Se trata de nuestra Selecci&oacute;n Argentina de F&uacute;tbol, que est&aacute; 
                    regulada por la Asociación del Fútbol Argentino (AFA).
                </h3>

                <div class="carrousel"> 
                    <img class="image1" src={imgCarrousel1} alt="Nuestra Selecci&oacute;n" /> 
                    <img class="image2" src={imgCarrousel2} alt="Nuestra Camisa" /> 
                    <img class="image3" src={imgCarrousel3} alt="Nuestra Hinchada" />
                </div> 

                <h3> 
                    La AFA es la organización encargada de organizar y regular el fútbol en Argentina. 
                    Fue fundada en 1893 y es una de las asociaciones de fútbol más antiguas del mundo. 
                    La AFA es responsable de organizar la Primera División del fútbol argentino, 
                    así como otras competiciones nacionales, incluyendo la Copa Argentina 
                    y la Supercopa Argentina. La Albiceleste es de las selecciones más exitosas del mundo, 
                    habiendo ganado tres veces la Copa Mundial de la FIFA y 15 veces la Copa América.
                </h3>
            </div>

        </div> 
    );
} 

export default Home;