import { Heading } from '@chakra-ui/react'
import { useState } from 'react'




const InputBook = ({onCreateBook}) => {
    const [ title, setTitle ] = useState ('')

    return (
      <>
        <Heading as='h1' size='4xl' noOfLines={1}>
          Borrowed Book
        </Heading>
        <form id="book_form" onSubmit={(e) => {
          e.preventDefault();                       
          if(!title)                          
            return                                   
          onCreateBook(title)                  
          setTitle('')                           
          }}>
        <input
          id="book_input"
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <button type="submit" className="btn"><i className="fa-solid fa-plus"></i></button>  
      </form>
      </>     
    )

}
    export default InputBook


