import { books } from "../data";
import Link from "next/link";

export default function BookDetail({ book }) {
  return (
    <div>
      <h1>{book.title}</h1>
      <p>Author: {book.author}</p>
      <p>Price: ${book.price}</p>
      <Link href="/">Back to Homepage</Link>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const bookId = parseInt(params.id);
  const book = books.find((b) => b.id === bookId);

  return {
    props: { book },
  };
}
