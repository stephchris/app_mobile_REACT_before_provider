import { useState } from 'react'
import React from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';


import InputBook from './components/header'
import ListBooks from './components/ListBooks'

export default function App() {
  const [books, setBooks] = useState(initialBooks)

  const createBook = title => {
    setBooks([
      ...books,
      {
        id: nextId++,
        title: title,
        available: true
      }
    ])
  }

  const updateBook = (newBook) => {
    setBooks(books.map(book => {
      if(book.id === newBook.id) {
        return newBook
      } else {
        return book
      }
    }))
  }

  return (
    
      <section className="wrapper">
        <ChakraProvider theme={theme}>
        <InputBook onCreateBook={createBook}/>
        <ListBooks 
          books={books}
          onUpdateBook={updateBook}
        />
        </ChakraProvider>
      </section>
  );
}

const initialBooks = [
  {
    id: 1,
    title: 'title 1',
    author: 'author 1',  
    available: true             
  },
  {
    id: 2,
    title: 'title 2', 
    author: 'author 2', 
    available: true
  },
  {
    id: 3,
    title: 'title 3',
    author: 'author 3',   
    available: false
  }
]

let nextId = initialBooks.length + 1
