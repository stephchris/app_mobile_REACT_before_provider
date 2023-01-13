
import { useState } from 'react';



const ItemBook = ({book, onUpdateBook}) => {
    const [isNotAvailable, setIsNotAvailable] = useState(false)
    let itemContent = '';

  if(isNotAvailable) {
  itemContent = (
    <>
        <input
            type="text"
            value={book.title}
            onChange={(e) => {
                onUpdateBook({
                    ...book,
                    title: e.target.value,
                    available: false
                })
            }}
            />
            <button
            type="button"
            className="btn_borrow"
            onClick={() => setIsNotAvailable(false)}><i className="fa-solid fa-save"></i></button>
    </>
  )
} else

return (
    <>
        {itemContent}
        <button
            type='button'
            className={book.available && !isNotAvailable ? 'btn_borrow' : ''}
            disabled={isNotAvailable}
            onClick={() => {
                onUpdateBook({
                    ...book,
                    available: !book.available
                })
            }}><i className="fa-solid fa-check"></i></button>
            </>
)
}
export default ItemBook