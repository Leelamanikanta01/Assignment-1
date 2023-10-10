import Link from "next/link";
import { books } from "./data";

export default function Home() {
  return (
    <div>
      <h1>Online Bookstore</h1>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <Link href={`/book/${book.id}`}>{book.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
