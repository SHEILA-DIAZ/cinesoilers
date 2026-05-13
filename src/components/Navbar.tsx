import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem 2rem',
        borderBottom: '1px solid #ccc',
      }}
    >
      <h2>CineSoilerS</h2>

      <nav>
        <ul
          style={{
            display: 'flex',
            gap: '1rem',
            listStyle: 'none',
          }}
        >
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;