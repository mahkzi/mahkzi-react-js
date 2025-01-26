import CartContext from "./CartContext";
import { useState } from "react";
function CartProvider({children}){
    const [cart, setCart] = useState([])

    const addToCart = item => {
        const isInCart = cart.some(prod => prod.id === item.id)
        if (!isInCart) return setCart([...cart, item])
            
        alert("Su producto ya esta en el carrito")
    }

    const getQuantity = () => {
        const cantidades = cart.map(item => item.quantity)
        const cantidadTotal = cantidades.reduce((acc, current)=> acc + current, 0)
        return cantidadTotal
    }
    return(
        <CartContext.Provider value={{...cart, addToCart, getQuantity}}>
        {children}
    </CartContext.Provider>   
    )
}
export default CartProvider
