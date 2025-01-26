import {Button} from "react-bootstrap"
import { ListGroup } from "react-bootstrap"
function CartList ({items}) {
    return (
        <ListGroup className="w-60">
            {items.map (item => (
                 <ListGroup.Item className="d-flex justify-content-between" key={item.id}>
                 {item.title} X {item.quantity}
                 <Button variant="danger">X</Button>
             </ListGroup.Item>
            ))}
      </ListGroup>
    )
}
export default CartList