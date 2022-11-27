
import "./NavBar.css"


import { CartWidget } from "./cartWidget/CartWidget";

const NavBar = ()=>{
    return(
        <div className="navbar-container">
            <div className="container-logo">
                <img className="logo-navbar" src="https://res.cloudinary.com/dcygblfma/image/upload/v1669512365/logo_webrja.jpg" alt="" />
            </div>
            <ul className="navbar">
                <li className="navbar-item">Todos</li>
                <li className="navbar-item">Genero</li>
                <li className="navbar-item">Nombre</li>
            </ul>
            <CartWidget />
        </div>
    )
}

export default NavBar;