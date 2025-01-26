import {createContext, useContext} from "react"
const CartContext= createContext(null)
export const useCart = () => useContext(CartContext)
export default CartContext
