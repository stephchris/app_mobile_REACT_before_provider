import { createContext, useState } from 'react';

export const BooksContext = createContext(null);

export default function BooksProvider ({children}) {
  const [books, setBooks] = useState(initialBooks);

  const createBook = title => {
    setBooks([
      ...books,
      {
        id: nextId++,
        title: title,
        available: false
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
    <TodosContext.Provider value={{
        todos, 
        createTodo,
        deleteTodo,
        updateTodo
    }}>
        {children}
    </TodosContext.Provider>
  );
}

const initialData = [
  {
    id: 1,
    description: 'todo 1',
    done: true
  },
  {
    id: 2,
    description: 'todo 2',
    done: false
  },
  {
    id: 3,
    description: 'todo 3',
    done: false
  }
];

let nextId = initialData.length + 1
