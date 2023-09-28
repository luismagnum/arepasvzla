import logo from '../image/logovzla.svg'
const Nav = () => {
  return (
    <div>
        <header>
        <img class="logo" src={logo} alt=""/><span>Sabores de Venezuela</span>
        <ul class="navlist">
          <li><a href="#" class="active">Home</a></li>
          <li><a href="#" >Productos</a></li>
          <li><a href="#" >Contacto</a></li>
          <li><a href="#" >Nuestras Comidas</a></li>
        </ul>

    <div class="nav-icons">
        <a href="#" id="menu-icon"><i class="bi bi-list"></i></a>
    </div>
    </header>
    </div>
  )
}

export default Nav
