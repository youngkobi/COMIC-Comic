import { Link } from 'react-router-dom';
import { comics } from '../data/comics';
import styles from './HomePage.module.css';

function HomePage() {
  const featured = comics.slice(0, 4);

  return (
    <div>
      {/* Hero */}
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>ComicVault</h1>
        <p className={styles.heroSubtitle}>
          Your ultimate destination for comics, graphic novels, and more.
        </p>
        <Link to="/products" className={styles.heroButton}>
          Shop Now
        </Link>
      </section>

      {/* Featured Comics */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Featured Comics</h2>
        <div className={styles.comicsGrid}>
          {featured.map((comic) => (
            <Link
              to={`/products/${comic.id}`}
              key={comic.id}
              className={styles.comicCard}
            >
              <img
                src={comic.image}
                alt={comic.title}
                className={styles.comicImage}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://placehold.co/400x600?text=No+Cover';
                }}
              />
              <div className={styles.comicInfo}>
                <p className={styles.comicTitle}>{comic.title}</p>
                <span className={styles.comicPrice}>${comic.price}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className={styles.categories}>
        <div className={styles.categoriesInner}>
          <h2 className={styles.categoriesTitle}>Shop by Category</h2>
          <div className={styles.categoryButtons}>
            <Link to="/products?category=Marvel" className={styles.categoryBtn}>Marvel</Link>
            <Link to="/products?category=DC" className={styles.categoryBtn}>DC</Link>
            <Link to="/products?category=Independent" className={styles.categoryBtn}>Independent</Link>
            <Link to="/products?category=Manga" className={styles.categoryBtn}>Manga</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;