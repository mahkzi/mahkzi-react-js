import {Button} from "react-bootstrap"
import { ListGroup } from "react-bootstrap"
function CartList ({items}) {
    return (
        <ListGroup>
            {items.map(item => (   
                <ListGroup.Item key={item.id} >
                    {item.title} X {item.quantity} ${item.price}
                    <Button variant="danger">X</Button>
                </ListGroup.Item>))}
                </ListGroup>
      
    )
}
export default CartList