import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import CartItem from '../componenets/CartItem';
import useCart from '../hooks/useCart';
import RootLayout from '../Layouts/RootLayout';
import axios from '../api/axios';
import Footer from '../componenets/Footer';

const Cart = () => {

    const { products, auth } = useAuth();
    const { cartProducts, getTotalAmount, carts, setCarts } = useCart();
    const Navigate = useNavigate();

    // useEffect(() => {

    //     const fetchCarts = async () => {
    //         try {
    //             console.log(auth.id);
    //             const response = axios.get(`/carts/user/${auth.id}`);
    //             const id = response?.data?.id;
    //             const cartProducts = response?.data?.products;
    //             setCarts({ id, cartProducts });
    //         }
    //         catch (err) {
    //             console.log(`error: ${err.message}`);
    //         }
    //     }
    //     fetchCarts();

    // }, []);

    // const totalAmount = getTotalAmount() ;

    return (
        <>
            <RootLayout />
            <div className='w-11/12 mx-auto'>
                <div className='h-16 border-b-2 mx-auto border-gray-500 flex'>
                    <p className="text-4xl px-4 my-auto cursor-pointer"
                        onClick={() => Navigate(-1)}>←</p>
                    <p className='text-2xl px-2 my-auto'>Continue Shopping</p>
                </div>

                <section className="main-content">
                    <p className='text-2xl mt-8 ml-4'>Shopping Cart</p>
                    <p className="text-lg ml-4">There are { } items in the Cart.</p>

                    <div className="cart-items h-96 w-4/5 mx-auto my-8 bg-gray-100 rounded-xl flex justify-center items-center">
                        <div className="cart-items-container h-80 w-11/12  overflow-y-auto">
                            {products.map(product => {
                                if (cartProducts[product.id - 1] !== 0) {
                                    return <CartItem
                                        id={product.id}
                                        key={product.id}
                                        name={product.title}
                                        category={product.category}
                                        price={product.discountedPrice}
                                        image={product.thumbnail} />

                                }
                            })}
                        </div>
                    </div>
                    {/* <div className='checkout'>
                    Subtotal : ₹ {totalAmount}
                </div> */}
                </section>
                <section className="container-lg h-32"></section>
            </ div>
            <Footer />
        </>)
}

export default Cart;
