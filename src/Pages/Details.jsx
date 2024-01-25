import useAuth from '../hooks/useAuth';
import useDetails from '../hooks/useDetails';
import useCart from '../hooks/useCart';
import { useNavigate } from 'react-router-dom';
import ImageSlider from '../componenets/ImageSlider';
import Stars from '../componenets/Stars';

const Details = () => {

  const { details } = useDetails();
  const { products } = useAuth();
  const { addToCart, cartProducts } = useCart();

  const Navigate = useNavigate();
  const cartItemsAmount = cartProducts[details] ;

  const continerStyles = {
    width : '500px' ,
    height : '280px' ,
    margin : '0 auto'
  }

  return (
    <>
      <div className='w-11/12 mx-auto'>
            <div className='h-16 border-b-2 mx-auto border-gray-500 flex'>
                <p className="text-4xl px-4 my-auto cursor-pointer"
                    onClick={() => Navigate(-1)}>←</p>
                <p className='text-2xl px-2 my-auto'>Continue Shopping</p>
            </div>
      </div>

      <main className="main-content flex container-lg h-96 m-4">
        {/* Image Slider  */}
        <div className="ImageSlider w-1/2 mt-24 justify-items-center rounded-md">
            <ImageSlider images={products[details].images} />
        </div>

        {/* Details */}
        <div className="Information w-1/3 m-2 justify-items-center">
          <p className='text-5xl text-black py-4'>{products[details].title}</p>
          <p className="text-2xl text-[#555555] py-1"><strong>Brand : </strong><span className='text-xl'>{products[details].brand}</span></p>
          <p className="text-xl text-[#555555] py-1"><strong>Category : </strong><span>{products[details].category}</span></p>
          <Stars ratings={products[details].rating}/>
          <p className="text-lg text-[#555555] py-1"><span className='text-lg'>{products[details].rating} out of 5.00</span></p>
          <hr className='h-px mx-1 my-4 bg-black border-0 dark:bg-gray-700' />
          <p className="text-2xl text-[#555555] my-2">-{products[details].discountPercentage}% <span className='mx-2 text-4xl'>₹<strong className='px-1 text-black'>{products[details].price}</strong></span></p>
          <p className="text-lg text-[#555555]"><span><strong className='text-xl text-black'>{products[details].stock}</strong></span> available in stock</p>
          <hr className='h-px mx-1 my-4 bg-black border-0 dark:bg-gray-700' />
          <p className='text-[#555555] text-lg py-2'>{products[details].description}</p>
          <button className="bg-black text-lg text-white px-8 py-2 rounded-lg mx-auto my-2"
          onClick={() => addToCart(details)}>
            Add to Cart {cartItemsAmount > 0 && <>({cartItemsAmount})</>}
          </button>
        </div>
      </main>
    </>
  )
}

export default Details
