import { Link } from 'react-router-dom';

const Navbar = () => (
    <nav className="bg-gray-800 text-white p-4">
        <Link to="/" className="mr-4 text-white hover:underline">Home</Link>
        <Link to="/about" className="mr-4 text-white hover:underline">About</Link>
        <Link to="/projects" className="mr-4 text-white hover:underline">Projects</Link>
        <Link to="/contact" className="text-white hover:underline">Contact</Link>
    </nav>
);

export default Navbar;
