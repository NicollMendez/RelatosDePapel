import './search.css';
import './searchbar.css';
import { Link } from 'react-router-dom';

const Search = () => {
    return (
        <div className="search-content">
            <nav className="search">
                <Link to="/Home">
                    <h1 className="search-logo">Relatos de Papel</h1>
                </Link>
                <div class="search-bar">
                    <form action="" method="">
                        <input type="search" placeholder="Escribe aqui..."></input>
                        <Link to="/Home">
                            <button>Buscar</button>
                        </Link>
                    </form>
                </div>
                <Link to="/Carrito">
                    <h2 className="search-cart">🛒</h2>
                </Link>
                <Link to="/">
                <h2 className="search-cart">👤</h2>
                </Link>
            </nav>
        </div>
    );
}

export default Search;