import { ListGroup, Button } from "react-bootstrap"
import { useContext } from "react"
import CartContext from "../context/CartContext"

function CartItem ({item}) {
    const {removeFromCart} = useContext(CartContext)
    const handleRemove = () => {
        removeFromCart(item.id)
    }
    return(
        <ListGroup>
            <ListGroup.Item key={item.id} >
                {item.title} X {item.quantity} ${item.price}
                <div className="cart-items">
                <Button variant="danger" onClick={handleRemove}>X</Button>
                </div>
            </ListGroup.Item>
            </ListGroup>
    )
}
export default CartItem