import Button from 'react-bootstrap/Button';
import CartList from './CartList';
import { useCart } from '../context/CartContext';
function Cart (){
    const {cart} = useCart()
    return(
        <div className="container-carrito">
            <CartList items={cart} />
        <p className="texto-total">Total:$</p>
        <Button variant="outline-dark">Finalizar Compra</Button>
        </div>
    )
}
export default Cart