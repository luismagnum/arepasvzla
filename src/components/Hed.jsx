import React from 'react'
import arepa from '../image/arepas02.png'

const Hed = () => {
  return (
    <>
      <div className="home">
        <div id="home">
            <div className="home-text">
            <h1>Arepas</h1>
            <h2>Venezolanas</h2>
            <h3>Rellenas de Carne y Pollo</h3>
            </div>
        </div>
        <div className="home-img">
            <img src={arepa} alt=""/>
        </div>
      </div>
    </>
  )
}

export default Hed
