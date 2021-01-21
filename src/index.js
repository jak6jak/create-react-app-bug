import React from 'react'
import ReactDom from 'react-dom'

const books = [
  {
    id: 1,
    img: "https://prodimage.images-bn.com/pimages/9781680105223_p0_v2_s550x406.jpg",
    title: "I love you to the moon and back",
    author: "Jacob Edie"
  },
  {
    id: 2,
    img: "https://images-na.ssl-images-amazon.com/images/I/71aLultW5EL._AC_UL200_SR200,200_.jpg",
    title: "Our Class is a Family",
    author: "Shannon Olsen"
  },
  {
    id: 3,
    img: "https://images-na.ssl-images-amazon.com/images/I/51cApiT7xML._SX327_BO1,204,203,200_.jpg",
    title: "All the Ugly and wonderful Things: A Novel",
    author: "Bryn Greenwood"
  }
]

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} book={...book}></Book>
      })}
    </section>
  );
}


const Book = (props) => {
  const { img, title, author } = props;
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>

  );
}

ReactDom.render(<BookList />, document.getElementById('root'))