import {Button} from "react-bootstrap"
import { ListGroup } from "react-bootstrap"
function CartList ({items}) {
    return (
        <ListGroup className="cart-view">
            {items.map(item => (   
                <ListGroup.Item key={item.id}>{item.title}X {item.quantity}</ListGroup.Item>))}
      </ListGroup>
      
    )
}
export default CartList