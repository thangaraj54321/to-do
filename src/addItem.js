import React from 'react'
import { FaPlus } from 'react-icons/fa'

const AddItem = ({setNewItem, AddSumtit,newItem}) => {
  return (
    <form className='Add-form' onSubmit={AddSumtit}>
     <label htmlFor='addItem'>Add  Item</label>
     <input type='text'
      autoFocus
      id='addItem' 
      placeholder='Add Item'
      required
  
      />
      <button type='submit' 
      aria-label='Add Item'>
        <FaPlus />
      </button>
    </form>
  )
}

export default AddItem