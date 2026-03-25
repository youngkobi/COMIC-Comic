import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { comics } from '../data/comics';
import { useCart } from '../context/useCart';
import styles from './ProductDetailPage.module.css';

function ProductDetailPage() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const comic = comics.find((c) => c.id === Number(id));

  if (!comic) {
    return (
      <div className={styles.notFound}>
        <p>Comic not found!</p>
        <Link to="/products">← Back to Comics</Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(comic);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className={styles.container}>
      <Link to="/products" className={styles.back}>
        ← Back to Comics
      </Link>

      <div className={styles.product}>
        <div className={styles.imageWrapper}>
          <img
            src={comic.image}
            alt={comic.title}
            className={styles.image}
            onError={(e) => {
              (e.target as HTMLImageElement).src =
                'https://placehold.co/400x600?text=No+Cover';
            }}
          />
        </div>

        <div className={styles.details}>
          <span className={styles.category}>{comic.category}</span>

          <h1 className={styles.title}>{comic.title}</h1>

          <div className={styles.meta}>
            <p className={styles.metaItem}>
              <span>Writer:</span> {comic.writer}
            </p>
            <p className={styles.metaItem}>
              <span>Artist:</span> {comic.artist}
            </p>
          </div>

          <p className={styles.description}>{comic.description}</p>

          <p className={styles.price}>${comic.price}</p>

          {!comic.inStock ? (
            <p className={styles.outOfStock}>Out of Stock</p>
          ) : added ? (
            <button className={styles.added} type="button">
              ✓ Added to Cart!
            </button>
          ) : (
            <button
              className={styles.addToCart}
              onClick={handleAddToCart}
              type="button"
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductDetailPage;