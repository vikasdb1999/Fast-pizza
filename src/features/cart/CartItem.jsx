import {formatCurrency} from "../../utils/helpers"

import DeleteItem from "./DeleteItem";
import UpdateCartQuantity from "./UpdateCartQuantity";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;
 
  return (
    <li className="py-4  sm:flex sm:justify-between sm:items-center ">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex justify-between items-center sm:gap-6">
        <p className="font-bold text-sm" >{formatCurrency(totalPrice)}</p>
        <UpdateCartQuantity pizzaId={pizzaId} currentQuantity={quantity}/>  
        <DeleteItem pizzaId={pizzaId}/>
      </div>
    </li>
  );
}

export default CartItem;
