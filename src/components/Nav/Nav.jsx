import React, { useState } from "react";
import "./Nav.module.css"

function Nav() {
    const [show, setShow] = useState(true);
    const mostrarBarra = () => {
        setShow(!show);
    };
    return (
        <>
            {" "}
            {/*Barra de navegación Escritorio*/}
            <div className="navbar"></div>
            {/*navbar de mobile*/}
            {show ? (<div className="navbar_mobile">
                <ul className="navbar_ul">

                    <li onClick={mostrarBarra}>
                        <p>Pagina principal</p>
                    </li>
                    <li onClick={mostrarBarra}>
                        <p>Tienda</p>
                    </li>
                    <li onClick={mostrarBarra}>
                        <p>contactos</p>
                    </li>
                </ul>
            </div>
            ) : (<div onClick={mostrarBarra} className="mostrar_navbar">
                {""}
                <p>MOSTRAR MENU</p>{" "}
            </div>
            )}
        </>
    );
}


export default Nav;
