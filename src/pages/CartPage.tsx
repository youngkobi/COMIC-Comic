import { Link } from 'react-router-dom';
import { useCart } from '../context/useCart';
import styles from './CartPage.module.css';

function CartPage() {
  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    totalItems,
    totalPrice,
  } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className={styles.cartPage}>
        <h1 className={styles.title}>Your Cart</h1>
        <div className={styles.emptyCart}>
          <p className={styles.emptyText}>Your cart is empty.</p>
          <Link to="/products" className={styles.shopLink}>
            Go to Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.cartPage}>
      <h1 className={styles.title}>Your Cart</h1>

      <div className={styles.cartContent}>
        <div className={styles.itemsList}>
          {cartItems.map((item) => (
            <div key={item.comic.id} className={styles.cartItem}>
              <img
                src={item.comic.image}
                alt={item.comic.title}
                className={styles.image}
              />

              <div className={styles.itemInfo}>
                <h2 className={styles.itemTitle}>{item.comic.title}</h2>
                <p className={styles.price}>${item.comic.price.toFixed(2)}</p>

                <div className={styles.quantityControls}>
                  <button
                    className={styles.quantityButton}
                    onClick={() => decreaseQuantity(item.comic.id)}
                    type="button"
                  >
                    -
                  </button>

                  <span className={styles.quantity}>{item.quantity}</span>

                  <button
                    className={styles.quantityButton}
                    onClick={() => increaseQuantity(item.comic.id)}
                    type="button"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className={styles.itemRight}>
                <p className={styles.itemTotal}>
                  ${(item.comic.price * item.quantity).toFixed(2)}
                </p>

                <button
                  className={styles.removeButton}
                  onClick={() => removeFromCart(item.comic.id)}
                  type="button"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.summaryBox}>
          <h2 className={styles.summaryTitle}>Summary</h2>
          <p className={styles.summaryText}>Total Items: {totalItems}</p>
          <p className={styles.summaryText}>
            Total Price: ${totalPrice.toFixed(2)}
          </p>

         <Link to="/checkout" className={styles.checkoutLink}>
  Proceed to Checkout
</Link>
        </div>
      </div>
    </div>
  );
}

export default CartPage;