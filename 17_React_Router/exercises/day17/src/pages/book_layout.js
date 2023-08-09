import { Link, Outlet } from "react-router-dom";

export default function BookLayout(){
  return (
    <>
    <Outlet context={{msg: "This message was passed down through Outlet"}}/>
      <ul>
    <li><Link to='/books/1'>Book 1</Link></li>
    <li><Link to='/books/2'>Book 2</Link></li>
    <li><Link to='/books/new'>New Books</Link></li>
    </ul>
    </>
  )
}
