import React from 'react'
import Arepau from '../image/arepau.png'

const About = () => {
  return (
    <>
      <div className="about" id="about">
        <div className="about-img">
            <img src={Arepau} alt=""/>
        </div>
        <div className="about-text">
            <h2>Nuestras Arepas</h2>
            <h2>Historia</h2>
            <p>
              Las arepas son unos panecillos redondos hechos a base de harina de maíz precocido. Podemos encontrar arepas hechas con harina amarilla o con harina blanca.  
Las arepas son consumidas en muchos países latinoamericanos, entre ellos Venezuela, donde se comen para desayunar, comer o cenar ya sea en casa, en restaurantes o en puestos callejeros. Cualquier momento y lugar es perfecto para disfrutar de este plato.
            </p>
        </div>
      </div>
    </>
  )
}

export default About
