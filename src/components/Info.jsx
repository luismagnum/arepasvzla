import React from 'react'
import arepa from '../image/arepau.png'

const Info = () => {
  return (
    <>
      <div className="container" id='Seccion1'>
        <div className="container-box">
            <img src={arepa} alt=""/>
            <h3>Arepas</h3>
            <a href="#">Carne c/queso</a>
        </div>
        <div className="container-box">
            <img src={arepa} alt=""/>
            <h3>Arepas</h3>
            <a href="#">Pollo c/queso</a>
        </div>
        <div className="container-box">
            <img src={arepa} alt=""/>
            <h3>Arepas</h3>
            <a href="#">Reina pepiada</a>
        </div>
    </div>
  </>
  )
}

export default Info
