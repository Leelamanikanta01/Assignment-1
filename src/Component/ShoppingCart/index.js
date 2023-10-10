// online-bookstore-frontend/pages/cart.js

import Link from "next/link";
import { useState } from "react";
import { books } from "./data";

export default function Cart() {
  const [cart, setCart] = useState([]);

  const addToCart = (bookId) => {
    const book = books.find((b) => b.id === bookId);
    setCart([...cart, book]);
  };

  return (
    <div>
      <h1>Shopping Cart</h1>
      <Link href="/">Back to Homepage</Link>
      <ul>
        {cart.map((book) => (
          <li key={book.id}>
            {book.title} - ${book.price}
          </li>
        ))}
      </ul>
      <Link href="/">Continue Shopping</Link>
    </div>
  );
}
