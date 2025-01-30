import CartContext from "./CartContext"
import { useState } from "react"
import Toast from 'react-bootstrap/Toast'
function CartProvider({children}){
    const [cart, setCart] = useState([])

    const addToCart = item => {
        const isInCart = cart.some(prod => prod.id === item.id)
        if (!isInCart) return setCart([...cart, item]) 
            else{ 
        return(
            <Toast>
                <Toast.Header>
                </Toast.Header>
                <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
              </Toast>
        )
              }
    }
    const subtractFromCart = item =>{
        const isInCart = cart.some(prod => prod.id === item.id)
    }
    const clearCart = () =>{
         setCart([])
    }

    const getQuantity = () => {
        const cantidades = cart.map(item => item.quantity)
        const cantidadTotal = cantidades.reduce((acc, current)=> acc + current, 0)
        return cantidadTotal
    }
    const totalPurchase = () => {
        const totales = cart.map(item => item.quantity*item.price)
        const total = totales.reduce((acc, current)=> acc + current, 0)
        return total
    }
    return(
        <CartContext.Provider value={{cart, addToCart, getQuantity, totalPurchase}}>
        {children}
    </CartContext.Provider>   
    )
}
export default CartProvider
