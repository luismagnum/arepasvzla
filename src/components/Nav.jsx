import logo from '../image/logovzla.svg'

const Nav = () => {
  const header = document.querySelector("header");

window.addEventListener("scroll",()=>{
    header.classList.toggle("sticky", this.window.scrollY > 80);
});
  return (
      <header className='sticky'>
        <img className="logo" src={logo} alt=""/><span>Sabores de Venezuela</span>
        <ul className="navlist">
          <li><a href="#" class="active">Home</a></li>
          <li><a href="#Seccion1" >Productos</a></li>
          <li><a href="#" >Contacto</a></li>
          <li><a href="#" >Nuestras Comidas</a></li>
        </ul>

    <div className="nav-icons">
        <a href="#" id="menu-icon"><i class="bi bi-list"></i></a>
    </div>
    </header>
  )
}

export default Nav
