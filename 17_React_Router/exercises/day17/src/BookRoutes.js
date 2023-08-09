import { Route, Routes } from "react-router-dom";
import Book from "./pages/book";
import Books from "./pages/books";
import BookLayout from "./pages/book_layout";
import NewBook from "./pages/new_book";

export default function BookRoutes() {
  return (
    <>
      <Routes>
        <Route element={<BookLayout />}>

          <Route index element={<Books />} />
          <Route path=":id" element={<Book />} />
          <Route path="new" element={<NewBook />} />
        </Route>
      </Routes>
    </>)

}
