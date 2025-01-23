import { useContext } from "react"
import CartContext from "../context/CartContext"
function CartWidget(){
    const {getQuantity} = useContext(CartContext)
    return(
<div className="div-carrito">
    <img src="../src/assets/icons8-carrito-de-compras-64.png" alt="img-carrito" />
    <p style={{padding:"10px", color:"white"}}>{getQuantity}</p>
</div>
    )
}
export default CartWidget