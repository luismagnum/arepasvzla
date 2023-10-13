import React from 'react'
import icon from '../image/sabor.ico'

const Info = () => {
  return (
    <>
      <div className="container" id='Seccion1'>
        <div className="container-box">
            <img src={icon} alt=""/>
            <h3>Empanadas</h3>
            <a href="#">Carne y pollo</a>
        </div>
        <div className="container-box">
            <img src={icon} alt=""/>
            <h3>Tequeños</h3>
            <a href="#">queso</a>
        </div>
        <div className="container-box">
            <img src={icon} alt=""/>
            <h3>Torta 3 leches</h3>
            <a href="#">Rico postre</a>
        </div>
    </div>
  </>
  )
}

export default Info
