import React from 'react'
import useCart from '../hooks/useCart'

const CartItem = ({id, name, category, price, image}) => {

  const {addToCart, removeFromCart, cartProducts, setCartProducts} = useCart();

  const slideStyles = {
    backgroundImage: `url(${image})`,
    backgroundPosition: 'center',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat'
}

  return (
    <div className='h-32 w-full bg-white flex justify-evenly items-center border-b-2 border-gray-200'>

      <div className='h-24 w-24 ' style={slideStyles}></div>

      <div className='text-md text-black'>
        <p >{name}</p>
      </div>

      <div className='price flex'>
        <p className='m-auto'>₹{price}</p>
        <p className='m-auto'>{category}</p>
      </div>

      <div className='Amount flex'>
        <div className="m-auto px-2 cursor-pointer" onClick={() => removeFromCart(id-1)}>-</div>
        <div className='m-auto px-2 border-2 border-black'>{cartProducts[id-1]}</div>
        <div className='m-auto px-2 cursor-pointer'  onClick={() => addToCart(id-1)}>+</div>
      </div>

      <button className='border-black px-4 py-2 rounded-md bg-[#555555] hover:bg-[#353535] text-white'
      onClick={() => setCartProducts(prev => ({...prev, [id-1]:0 })) }>delete</button>

    </div>
  )
}

export default CartItem ;
