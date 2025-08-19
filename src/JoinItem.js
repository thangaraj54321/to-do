import React from 'react'
import { FaPlus } from 'react-icons/fa'

const JoinItem = () => {
  return (
    <form className='join-form'>
     <label htmlFor='joinItem'>Join Item</label>
     <input type='text'
      id='joinItem' 
      placeholder='Add Item'
      required

      />
      <button type='submit' aria-label='Join Item'>
        <FaPlus />
      </button>
    </form>
  )
}

export default JoinItem