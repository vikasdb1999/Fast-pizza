import { formatCurrency } from "../../utils/helpers";
import Button from "../../ui/Button"
import { useDispatch, useSelector } from "react-redux";
import { addItem, getCurrentQuantityById } from "../cart/cartSlice";
import DeleteItem from "../cart/DeleteItem";
import UpdateCartQuantity from "../cart/UpdateCartQuantity";
function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const currentQuantity = useSelector(getCurrentQuantityById(id));
  const isInCart = currentQuantity>0;
  const dispatch = useDispatch();
  function handleAddTocart()
  {
    const newItem =   {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
  }
  dispatch(addItem(newItem));
    
  }

  return (
    <li className="flex gap-x-4 py-2 ">
      <img src={imageUrl} alt={name} className={`h-24 ${soldOut?"grayscale opacity-70":""}`} />
      <div className="flex flex-col pt-0.5 flex-grow">
        <p className="font-medium">{name}</p>
        <p className="text-sm capitalize text-stone-500 italic">{ingredients.join(', ')}</p>
       
        <div className="mt-auto flex items-center  justify-between">
          
        
          {!soldOut ? <p className="text-sm">{formatCurrency(unitPrice)}</p> : 
          <p className="text-sm uppercase font-medium text-stone-500">Sold out</p>}
       
         
          {isInCart && <div className="flex items-center gap-3  sm:gap-8 "> 
           <UpdateCartQuantity  pizzaId={id} currentQuantity={currentQuantity}/>
          <DeleteItem  pizzaId={id} />
             
           </div>}
          {!soldOut && !isInCart &&( <Button type="small" onClick={handleAddTocart}>Add to Cart</Button>)}
        </div>
       
      </div>
    </li>
  );
}

export default MenuItem;
