import Button from 'react-bootstrap/Button';
import CartList from './CartList';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router';
function Cart (){
    const {cart, totalPurchase} = useCart()
    if (cart.length === 0){
        return(
            <div>
                <h1>Su carrito esta vacío</h1>
                <Button as={Link} to="/">Ir a ver productos</Button>
            </div>
        )
    }
    return(
        <div className="container-carrito">
            <CartList items={cart} />
        <p className="texto-total">Total:$ {totalPurchase()}</p>
        <Button variant="outline-dark" as={Link} to="/checkout">Finalizar Compra</Button>
        </div>
    )
}
export default Cart