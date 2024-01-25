import { createContext ,useState } from "react";
import useAuth from "../hooks/useAuth";

const CartContext = createContext({}) ;

export const CartProvider = ({ children }) => {
    const { products } = useAuth() ;
    
    const getDefaultCart = () => {
        let cart = {} ;
        const len = products.length ;
        for( let i=0 ; i<30 ; i++ ){
            cart[i] = 0 ;
        }
        return cart ;
    }
    const [cartProducts, setCartProducts] = useState(getDefaultCart());
    const [carts, setCarts] = useState({});

    const getTotalAmount = () => {
        let totalAmount = 0;
        for(const product in cartProducts ){
            if(cartProducts[product] > 0) {
                let productInfo = products.find(product => product.id === Number(product)+1);
                totalAmount += cartProducts[product] * productInfo.price ;
            }
        }
        return totalAmount ;
    }
    
    const addToCart = (productId) => {
        setCartProducts(prev => ({...prev,[productId]: prev[productId]+1}));
        console.log(cartProducts);
    }

    const removeFromCart = (productId) => {
        setCartProducts(prev => ({...prev,[productId]: prev[productId]-1}));
    }

    return(
        <CartContext.Provider
        value={{ cartProducts, setCartProducts, addToCart, removeFromCart, getTotalAmount, setCarts}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext ;