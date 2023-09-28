import React from 'react'
import arepa from '../image/arepas01.png'

const Info = () => {
  return (
    <div>
      <section class="container">
        <div class="container-box">
            <img src={arepa} alt=""/>
            <h3>11:00 - 11:00pm</h3>
            <a href="#">Horario de trabajo</a>
        </div>
        <div class="container-box">
            <img src={arepa} alt=""/>
            <h3>Villa Regina</h3>
            <a href="#">Direccion</a>
        </div>
        <div class="container-box">
            <img src={arepa} alt=""/>
            <h3>yasminlinares</h3>
            <a href="#">Email</a>
        </div>
    </section>
    </div>
  )
}

export default Info
