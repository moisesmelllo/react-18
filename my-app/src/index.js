import React from "react";
import ReactDOM from 'react-dom/client';

import './index.css';
import {books} from './books';
import Book from './book';


function BookList() {
   return (
     <reactElement>
       <h1>Amazon best sellers</h1>

       <section className="booklist">
         {books.map((book, index) => {
           return <Book {...book} key={book.id} index={index} />
         })}
       </section>
     </reactElement>
   )
}


const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)
