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