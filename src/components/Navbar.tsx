import { Link } from 'react-router-dom';
import { useCart } from '../context/useCart';
import styles from './Navbar.module.css';

function Navbar() {
  const { totalItems } = useCart();

  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.logo}>💥 ComicVault</Link>
      <ul className={styles.navLinks}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Comics</Link></li>
        <li>
          <Link to="/cart" className={styles.cartLink}>
            🛒 Cart {totalItems > 0 && <span className={styles.cartBadge}>{totalItems}</span>}
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;