import { ListGroup } from "react-bootstrap"
import {Button} from "react-bootstrap"
import CartContext from "../context/CartContext"
import { useContext } from "react"
function CartItem ({item}) {
    const { clearCart } = useContext (CartContext)
    return(
        <ListGroup>
            <ListGroup.Item key={item.id} >
                {item.title} X {item.quantity} ${item.price}
                <Button variant="danger">X</Button>
                <Button onClick={clearCart}>Vacíar carrito</Button>
            </ListGroup.Item>
            </ListGroup>
    )
}
export default CartItem