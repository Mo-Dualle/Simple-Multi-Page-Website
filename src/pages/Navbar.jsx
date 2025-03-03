import{ Link } from 'react-router-dom';
import  './styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
    <h2>React Router</h2>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/contact">Contact</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/post">Post</Link></li>
    </ul>
  </nav>
  )
}

export default Navbar;
