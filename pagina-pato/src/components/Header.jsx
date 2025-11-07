import React, { useState } from "react";

export default function Header({ cartCount = 0, onSearch }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const [query, setQuery] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();
        if (onSearch) onSearch(query);
        else console.log("Buscar:", query);
    };

    return (
        <>
            <header className="site-header">
                <div className="container">
                    <a href="/" className="brand" aria-label="Página principal">
                        <svg
                            className="brand-icon"
                            width="28"
                            height="28"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                        >
                            <path
                                d="M12 2c1.1 0 2 .9 2 2v1h3a1 1 0 011 1v3a6 6 0 01-6 6 6 6 0 01-6-6V6a1 1 0 011-1h3V4c0-1.1.9-2 2-2z"
                                fill="currentColor"
                            />
                            <circle cx="12" cy="15.5" r="1.5" fill="currentColor" />
                        </svg>
                        <span className="brand-text">Página Perfumes</span>
                    </a>

                    <button
                        className="menu-toggle"
                        aria-label="Abrir menú"
                        aria-expanded={menuOpen}
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
                            <path
                                d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M3 6h18M3 12h18M3 18h18"}
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                fill="none"
                            />
                        </svg>
                    </button>

                    <nav className={`main-nav ${menuOpen ? "open" : ""}`} aria-label="Navegación principal">
                        <a href="#inicio">Inicio</a>
                        <a href="#productos">Productos</a>
                        <a href="#nosotros">Nosotros</a>
                        <a href="#contacto">Contacto</a>
                    </nav>

                    <form className="search" onSubmit={handleSearch} role="search" aria-label="Buscar productos">
                        <input
                            type="search"
                            placeholder="Buscar perfumes..."
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            aria-label="Buscar"
                        />
                        <button type="submit" aria-label="Buscar">
                            🔍
                        </button>
                    </form>

                    <a href="/carrito" className="cart" aria-label={`Carrito con ${cartCount} artículos`}>
                        <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
                            <path
                                d="M6 6h15l-1.5 9h-11L6 6zm0 0L4 2H1"
                                stroke="currentColor"
                                strokeWidth="1.2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                fill="none"
                            />
                        </svg>
                        {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
                    </a>
                </div>
            </header>

            <style>{`
                :root{
                    --bg:#fff;
                    --accent:#6b3b6b;
                    --muted:#666;
                    --container-gap:1rem;
                }
                .site-header{
                    background:var(--bg);
                    border-bottom:1px solid #eee;
                    position:sticky;
                    top:0;
                    z-index:40;
                }
                .container{
                    max-width:1100px;
                    margin:0 auto;
                    padding:0.6rem var(--container-gap);
                    display:flex;
                    align-items:center;
                    gap:0.75rem;
                }
                .brand{
                    display:flex;
                    align-items:center;
                    gap:0.5rem;
                    text-decoration:none;
                    color:var(--accent);
                    font-weight:700;
                }
                .brand-icon{ color:var(--accent); }
                .brand-text{ font-size:1.05rem; letter-spacing:0.2px; }

                .menu-toggle{
                    background:none;
                    border:0;
                    display:none;
                    margin-left:auto;
                    color:var(--muted);
                }

                .main-nav{
                    display:flex;
                    gap:0.5rem;
                    margin-left:1rem;
                }
                .main-nav a{
                    text-decoration:none;
                    color:var(--muted);
                    padding:0.45rem 0.6rem;
                    border-radius:6px;
                }
                .main-nav a:hover{ background:#f5f5f5; color:var(--accent); }

                .search{
                    margin-left:auto;
                    display:flex;
                    gap:0.4rem;
                    align-items:center;
                }
                .search input{
                    border:1px solid #e6e6e6;
                    padding:0.45rem 0.6rem;
                    border-radius:6px;
                    min-width:160px;
                }
                .search button{
                    border:0;
                    background:var(--accent);
                    color:#fff;
                    padding:0.45rem 0.6rem;
                    border-radius:6px;
                    cursor:pointer;
                }

                .cart{
                    display:inline-flex;
                    align-items:center;
                    margin-left:0.6rem;
                    position:relative;
                    color:var(--muted);
                    text-decoration:none;
                }
                .cart-count{
                    position:absolute;
                    top:-6px;
                    right:-8px;
                    background:#ff4d4f;
                    color:#fff;
                    font-size:0.65rem;
                    padding:2px 6px;
                    border-radius:999px;
                }

                /* Responsive */
                @media (max-width: 800px){
                    .menu-toggle{ display:inline-flex; }
                    .main-nav{
                        position:absolute;
                        top:64px;
                        left:0;
                        right:0;
                        background:#fff;
                        flex-direction:column;
                        gap:0;
                        padding:0.5rem;
                        border-bottom:1px solid #eee;
                        transform-origin:top;
                        display:none;
                    }
                    .main-nav.open{ display:flex; }
                    .search{ display:none; }
                    .brand-text{ font-size:0.96rem; }
                }
            `}</style>
        </>
    );
}