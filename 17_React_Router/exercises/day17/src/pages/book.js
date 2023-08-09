import { useOutletContext, useParams } from "react-router-dom"

export default function Book(){
  const {id} = useParams();
  const {msg} = useOutletContext();

  return (
    <> 
      <h1>Book {id}</h1>
      <h2>{msg}</h2>
    </>
  )
}
