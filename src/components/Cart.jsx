import Button from 'react-bootstrap/Button'
import CartList from './CartList'
import { useCart } from '../context/CartContext'
import { Link } from 'react-router'
function Cart (){
   
 const {cart, totalPurchase} = useCart()
    if (cart.length === 0){
        return(
            <div className='no-products'>
             <h1>Usted vacío su carrito o no agregó ningún producto</h1>
             <Button as={Link} to="/">Ir a ver productos</Button>
            </div>
        )
    }
    return(
        <div className="container-carrito">
            <CartList items={cart} />
            <div className='empty-cart'> 
                <Button variant="secondary" size="lg">Vacíar carrito</Button>
            </div>
            <p className="texto-total">Total:$ {totalPurchase()}</p>
            <Button variant="outline-dark" as={Link} to="/checkout">Finalizar Compra</Button>
        </div>
    )
}
export default Cart