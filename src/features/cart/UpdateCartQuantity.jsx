import React from 'react'
import Button from '../../ui/Button'
import { useDispatch } from 'react-redux'
import { decreaseItem, increaseItem } from './cartSlice';
function UpdateCartQuantity({pizzaId,currentQuantity}) {
   const dispatch = useDispatch();
    return (
    
    <div className='flex gap-1 items-center md:gap-3'>
        <Button type="rounded" onClick={()=>{
            dispatch(decreaseItem(pizzaId))
        }}>
         -
        </Button>
        <span className='text-sm font-medium'>
        {currentQuantity}
        </span>
        <Button type="rounded" onClick={()=>{
            dispatch(increaseItem(pizzaId))
        }}>
         +
        </Button>
    </div>
  )
}

export default UpdateCartQuantity