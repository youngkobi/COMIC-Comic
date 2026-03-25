import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/useCart';
import styles from './Navbar.module.css';

function Navbar() {
  const { totalItems } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.logo} onClick={closeMenu}>
        💥 ComicVault
      </Link>

      <button
        className={styles.burger}
        onClick={toggleMenu}
        type="button"
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
      >
        <span className={`${styles.burgerLine} ${menuOpen ? styles.line1Open : ''}`}></span>
        <span className={`${styles.burgerLine} ${menuOpen ? styles.line2Open : ''}`}></span>
        <span className={`${styles.burgerLine} ${menuOpen ? styles.line3Open : ''}`}></span>
      </button>

      <ul className={`${styles.navLinks} ${menuOpen ? styles.navLinksOpen : ''}`}>
        <li>
          <Link to="/" onClick={closeMenu}>Home</Link>
        </li>
        <li>
          <Link to="/products" onClick={closeMenu}>Comics</Link>
        </li>
        <li>
          <Link to="/cart" className={styles.cartLink} onClick={closeMenu}>
            🛒 Cart {totalItems > 0 && <span className={styles.cartBadge}>{totalItems}</span>}
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;