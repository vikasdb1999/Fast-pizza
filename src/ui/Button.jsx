import React from 'react'
import { Link } from 'react-router-dom'

function Button({children,disabled,to,type,onClick}) {
  const base = "bg-yellow-400 text-sm uppercase font-bold text-stone-600  tracking-wide rounded-full inline-block hover:bg-yellow-300 transition-colors duration-300 focus:outline-none focus:ring focus:ring-yellow-300  focus:bg-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed "
  const styles = {
    primary: base + "py-3 px-4 md:px-6 md:py-4",
    rounded: base+"px-2 py-1 md:px-3.5 md:py-2 text-sm" ,
    small: base+"py-2 px-4 md:px-5 md:py-2.5 text-xs",
    secondary: " text-sm border-2 border-stone-300 uppercase font-bold text-stone-400 py-2.5 px-4 tracking-wide rounded-full inline-block hover:bg-stone-300  hover:text-stone-800  focus:text-stone-800 transition-colors duration-300 focus:outline-none focus:ring focus:ring-stone-200  focus:bg-stone-300 focus:ring-offset-2 disabled:cursor-not-allowed sm:px-6 sm:py-3.5"
  }

  if(onClick)
  {
    return (
      <button  disabled={disabled} onClick={onClick} className={styles[type]}>
      {children}
      </button>
    )
  }
  if(to) 
  {
    return <Link className={styles[type]} to={to}>{children}</Link> 
  }
  
  return (
    <button  disabled={disabled} className={styles[type]}>
    {children}
    </button>
  )
}

export default Button