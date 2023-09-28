import React from 'react'
import arepa from '../image/arepas01.png'

const Hed = () => {
  return (
    <div>
        <section className='home'>
        <div id="home">
            <div className="home-text">
            <h1>Arepas</h1>
            <h2>Venezolanas</h2>
            <h3>Rellenas de Carne y Pollo</h3>
            <a href="#" class="btn">Explore Menu <i class="bi bi-play-fill"></i></a>
            <a href="#" class="btn2">Quiero Encargar</a>
            </div>
        </div>
        <div className="home-img">
            <img src={arepa} alt=""/>
        </div>
        </section>
    </div>
  )
}

export default Hed
