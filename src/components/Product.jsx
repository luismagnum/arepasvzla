import arepau from '../image/arepau.png'
import ico from '../image/sabor.ico'

const Product = () => {
  return (
    <>
      <div className="shop" id="shop">
        <div className="middle-text">
            <h4>Nuestros</h4>
            <h2>Combos</h2>
        </div>
        <div className="shop-content">
            <div className="row">
                <img src={arepau} alt=""/>
                <h3>Arepas</h3>
                <p>Carne c/queso</p>
                <div className="int-text">
                    <div className="Price">
                        <h6>$3000</h6>
                    </div>
                    <div className="s-btn">
                        <a href="#">Encargar ahora</a>
                    </div>
                </div>
                <div className="top-icon">
                    <a href="#"><img src={ico} alt=""/></a>
                </div>
            </div>
            <div className="row">
                <img src={arepau} alt=""/>
                <h3>Arepas</h3>
                <p>Pollo c/queso</p>
                <div className="int-text">
                    <div className="Price">
                        <h6>$3000</h6>
                    </div>
                    <div className="s-btn">
                        <a href="#">Encargar ahora</a>
                    </div>
                </div>
                <div className="top-icon">
                    <a href="#"><img src={ico} alt=""/></a>
                </div>
            </div>
            <div className="row">
                <img src={arepau} alt=""/>
                <h3>Arepas</h3>
                <p>Reina pepiada</p>
                <div className="int-text">
                    <div class="Price">
                        <h6>$3000</h6>
                    </div>
                    <div className="s-btn">
                        <a href="#">Encargar ahora</a>
                    </div>
                </div>
                <div className="top-icon">
                    <a href="#"><img src={ico} alt=""/></a>
                </div>
            </div>
        </div>
        <div class="row-btn">
            <a href="#" className="btn">Todos los productos<i class="bi bi-play-fill"></i></a>
        </div>
    </div>
    </>
  )
}

export default Product
