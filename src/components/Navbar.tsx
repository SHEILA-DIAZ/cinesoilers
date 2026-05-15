import { Link } from 'react-router-dom';

interface Props {
  cartCount: number;
}

function Navbar({ cartCount }: Props) {
  return (
    <header
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem 2rem',
        borderBottom: '1px solid #374151',
      }}
    >
      <h2>CineSoilerS</h2>

      <nav>
        <ul
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            listStyle: 'none',
          }}
        >
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            🛒 {cartCount}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="bg-black text-white px-6 py-4 flex gap-6">
      <Link to="/">Inicio</Link>
      <Link to="/catalog">Catálogo</Link>
      <Link to="/cart">Carrito</Link>
    </nav>
  )
}

export default Navbar
