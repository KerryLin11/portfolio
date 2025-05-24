import { Link } from 'react-router-dom';

const Navbar = () => (
    <nav style={{ padding: '1rem', background: '#333', color: 'white' }}>
        <Link to="/" style={{ marginRight: '1rem', color: 'white' }}>Home</Link>
        <Link to="/about" style={{ color: 'white' }}>About</Link>
    </nav>

);

export default Navbar;
