import { ListGroup } from "react-bootstrap"
import {Button} from "react-bootstrap"
import { useContext } from 'react'
import CartContext from '../context/CartContext'
function CartItem ({item}) {
  const { subtractFromCart } = useContext (CartContext)
    return(
        <ListGroup>
            <ListGroup.Item key={item.id} >
                {item.title} X {item.quantity} ${item.price}
                <div className="cart-items">
                <Button variant="danger" onClick={subtractFromCart}>X</Button>
                </div>
            </ListGroup.Item>
            </ListGroup>
    )
}
export default CartItem