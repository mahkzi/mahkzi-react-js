import CartContext from "./CartContext"
import { useState } from "react"
import Swal from "sweetalert2"
function CartProvider({children}){
    const [cart, setCart] = useState([])

    const addToCart = item => {
        const isInCart = cart.some(prod => prod.id === item.id)
        if (!isInCart) return setCart([...cart, item]) 
            else{ 
        return(
            Swal.fire({
                title: "El producto ya fue agregado al carrito",
                icon: "question"
              })
        )
              }
    }
    const subtractFromCart = item =>{
        const isInCart = cart.splice(prod => prod.id === item.id)
        return console.log(isInCart)
    }
    const clearCart = () =>{
        const emptyCart =  setCart([])
        return emptyCart
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
        <CartContext.Provider value={{cart, addToCart, getQuantity, totalPurchase, clearCart, subtractFromCart}}>
        {children}
    </CartContext.Provider>   
    )
}
export default CartProvider
