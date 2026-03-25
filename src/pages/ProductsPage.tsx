import { useState } from 'react';
import { Link } from 'react-router-dom';
import { comics } from '../data/comics';
import styles from './ProductsPage.module.css';

const categories = ['All', 'Marvel', 'DC', 'Independent', 'Manga'];

function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? comics
    : comics.filter((c) => c.category === activeCategory);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>All Comics</h1>
      </div>

      {/* Category Filters */}
      <div className={styles.filters}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={activeCategory === cat ? styles.filterBtnActive : styles.filterBtn}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Comics Grid */}
      <div className={styles.grid}>
        {filtered.length === 0 ? (
          <p className={styles.noResults}>No comics found in this category.</p>
        ) : (
          filtered.map((comic) => (
            <Link
              to={`/products/${comic.id}`}
              key={comic.id}
              className={styles.card}
            >
              <img
                src={comic.image}
                alt={comic.title}
                className={styles.cardImage}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://placehold.co/400x600?text=No+Cover';
                }}
              />
              <div className={styles.cardInfo}>
                <p className={styles.cardTitle}>{comic.title}</p>
                <p className={styles.cardWriter}>{comic.writer}</p>
                <div className={styles.cardFooter}>
                  <span className={styles.cardPrice}>${comic.price}</span>
                  {!comic.inStock && (
                    <span className={styles.outOfStock}>Out of Stock</span>
                  )}
                </div>
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}

export default ProductsPage;