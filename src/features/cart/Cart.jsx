import Button from '../../ui/Button';
import LinkButton from '../../ui/LinkButton';
import CartItem from "../../features/cart/CartItem"
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, getCart } from './cartSlice';
import EmptyCart from "./EmptyCart"

function Cart() {
  const cart = useSelector(getCart);
  const username = useSelector(state=>state.user.username);
  const dispatch = useDispatch();

  if(!cart.length) return <EmptyCart />

  return (
    <div className='px-4 py-3'>
      <LinkButton to="/menu">
      &larr; Back to menu
      </LinkButton>

      <h2 className='mt-7 text-xl font-bold'>Your cart, {username}</h2>
      <ul className='divide-y divide-stone-200 mt-3'>
      {cart.map(item=><CartItem item = {item} key={item.pizzaI} />)}
      </ul>
      <div className='mt-6 space-x-3'>
        <Button to="/order/new" type="primary">Order pizzas</Button>
        <Button type="secondary"  onClick={()=>dispatch(clearCart())}>Clear Cart</Button>
      </div>
    </div>
  );
}

export default Cart;
