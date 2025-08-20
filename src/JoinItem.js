import React from 'react'
import { FaPlus } from 'react-icons/fa'

const JoinItem = ({setNewItem, AddSumtit,newItem}) => {
  return (
    <form className='join-form' onSubmit={AddSumtit}>
     <label htmlFor='joinItem'>Join Item</label>
     <input type='text'
      id='AddItem' 
      placeholder='Add Item'
      required
      value ={newItem}
      onChange={(e) => setNewItem(e.target.value)}
      />
      <button type='submit' aria-label='Join Item'>
        <FaPlus />
      </button>
    </form>
  )
}

export default JoinItem