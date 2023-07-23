import React from "react";
import ReactDOM from 'react-dom/client';
import './index.css';

const books = [
    {
    author: 'Jordan Moore',
    title: 'Interesting Facts For Curious Minds',
    img: 'https://images-na.ssl-images-amazon.com/images/I/81yfsIOijJL._AC_UL600_SR600,400_.jpg',
    id: 1,
    },
    {
    author: 'James Clear',
    title: 'Atomic Habits',
    img: 'https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg',
    id: 2,
    }
]

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        console.log(book)
        const { img, title, author, id } = book
        return <Book img={img} title={title} author={author} key={id}/>
      })}
    </section>
  )
}

const Book = (props) => {
  console.log(props)
  return (
    <article className="book">
      <img src={props.img} alt={props.title} />
      <h2>{props.title}</h2>
      <h4>{props.author} </h4>
    </article>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)
