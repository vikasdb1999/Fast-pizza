import React from 'react'
import Header from './Header'
import CartOverview from "../features/cart/CartOverview"
import { Outlet, useNavigation } from 'react-router-dom'
import Loader from './Loader'

export default function AppLayout() {
  const navigation = useNavigation()
  const isLoading = navigation.state === 'loading';

  return (
    <div className='grid grid-rows-[auto_1fr_auto] h-screen '>
       {isLoading && <Loader />}
      
      <Header />
      <div className="overflow-scroll overflow-x-hidden ">
        <main className="mx-auto max-w-3xl">
          <Outlet />
        </main>
      </div>

      <CartOverview />
    </div>
  )
}
