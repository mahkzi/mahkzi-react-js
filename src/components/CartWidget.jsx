import { Link } from "react-router"
import { useContext } from "react"
import CartContext from "../context/CartContext"
function CartWidget(){
    const {getQuantity} = useContext(CartContext)
    return(
        <Link to="/cart" className="carrito">
            🛒 {getQuantity()}
        </Link>
    )
}
export default CartWidget