import { ListGroup } from "react-bootstrap"
import {Button} from "react-bootstrap"
function CartItem ({item}) {
    return(
        <ListGroup>
            <ListGroup.Item key={item.id} >
                {item.title} X {item.quantity} ${item.price}
                <Button variant="danger">X</Button>
            </ListGroup.Item>
            </ListGroup>
    )
}
export default CartItem