import ItemBook from './ItemBook'

const ListBooks = ({books, onUpdateBook}) => {
    return (
        <ul className="book">
            {books.map(book => (
                <li className= "book_item" key={book.id}>
                   
                    <p>{book.title}</p>
                    <p>{book.author}</p>
                    <p>{book.available}</p>
                    <ItemBook
                        book={book}
                        onUpdateBook={onUpdateBook}
                    />

                </li>
            ))}
        </ul>
    )
}


export default ListBooks












