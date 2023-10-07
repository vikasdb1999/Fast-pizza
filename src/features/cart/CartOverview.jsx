import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {  getTotalCartPrice, getTotalCartQuantity } from "./cartSlice";


function CartOverview() {
  const totalCartQuantity = useSelector(getTotalCartQuantity);
  const totalCartPrice = useSelector(getTotalCartPrice);
  if(!totalCartPrice) return null;
  return (
    <div className="bg-stone-800 flex justify-between items-center text-stone-200 px-4 py-4 sm:px-6 text-sm md:text-base">
      <p  className="text-stone-300 font-semibold uppercase space-x-4 sm:space-x-6">
        <span>{totalCartQuantity} pizzas</span>
        <span>${totalCartPrice}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
