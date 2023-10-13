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
        <div className='boton'>
        <a href="#" className="btn">Explore Menu <i class="bi bi-play-fill"></i></a>
            <a href="#" className="btn2">Quiero Encargar</a>
        </div>
    </>
  )
}

export default Hed
