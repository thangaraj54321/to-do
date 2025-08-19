import React from 'react'
import LineIten from './LineIten'

const ItemList = ({ items, handleCheck, handleDelete }) => {
  return (
    <div>
      <ul>
        {items.map((item) => (
          <LineIten
            key={item.id}
            item={item}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
          />
        ))}
      </ul>
    </div>
  )
}

export default ItemList

   


