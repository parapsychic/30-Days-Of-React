/// https://blog.webdevsimplified.com/2022-07/react-router/


import "./App.css";
import { Link, Outlet, Route, Routes, useRoutes } from "react-router-dom";
import Home from "./pages/home";
import NotFound from "./pages/not_found";
import BookRoutes from "./BookRoutes";
import BookLayout from "./pages/book_layout";
import Book from "./pages/book";
import NewBook from "./pages/new_book";
import Books from "./pages/books";

function App() {

 // let element = useRoutes([
 //   {
 //     path: '/', children: [{
 //       index: true, element: <Home />
 //     },
 //     {
 //       path: 'books', element: <BookLayout />, children: [
 //         { index: true, element: <Books /> }, 
 //         {
 //           path: ':id', element: <Book />,
 //         },
 //         {
 //           path: 'new', element: <NewBook />,
 //         },]
 //     },]
 //   },
 //   { path: '*', element: <NotFound /> }
 // ])

 // return element;

   return (
     <>
       <Routes>
         <Route path="/books" element={<h4>Extra Content that can change based on routes</h4>} />
       </Routes>
       <nav>
         <ul>
           <li>
             <Link to="/">Home</Link>
           </li>
           <li>
             <Link to="/books">Books</Link>

           </li>
         </ul>
       </nav>
       <Routes>
         <Route path="/" element={<Home />} />
         <Route element={<><Outlet /><Link to='/'>Go Home</Link></>}>
           <Route path="/books/*" element={<BookRoutes />}>
           </Route>
           <Route path="*" element={<NotFound />} />
         </Route>
       </Routes>
     </>
   );
}

export default App;
