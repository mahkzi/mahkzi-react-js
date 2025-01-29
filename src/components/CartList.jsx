import { ListGroup } from "react-bootstrap"
import CartItem from "./CartItem"
function CartList ({items}) {
    return (
        <ListGroup>
            {items.map(item => <CartItem item={item} key={item.id}/>)}
            </ListGroup>
    )
}
export default CartList