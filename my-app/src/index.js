import React from "react";
import ReactDOM from 'react-dom/client';
import './index.css';

const BookList = () => {
  return (
    <section className="booklist">
        <Book />
        <Book /> 
        <Book /> 
        <Book />
    </section>
  )
}
export default BookList

const Book = () => {
  return (
    <article className="book">
        <Image/>
        <Title/>
        <Author/>
    </article>
  )
}

const Image = () => (
  <img
    src="https://images-na.ssl-images-amazon.com/images/I/81yfsIOijJL._AC_UL600_SR600,400_.jpg"
    alt="American Prometheus"
  ></img>
)
const Title = () => {
    return <h2>American Prometheus</h2>
}
const Author = () => <h4>Robert Oppenheimer</h4>

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)
