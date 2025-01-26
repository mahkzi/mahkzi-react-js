import { useState, useContext } from "react"
import Button from 'react-bootstrap/Button'
import CartContext from "../context/CartContext"
function ItemCount({item}){
    const [count, setCount] = useState(0)

    const { addToCart } = useContext (CartContext)

    const handleAdd= () => {
        setCount(count+1)
    }
    const handleSubstract= () => {
        setCount(count-1)
    }
    const handleAddToCart = () => {
    addToCart({ ...item, quantity: count })
  }
return(
    <div>
    <p>{count}</p>
      <Button onClick={handleAdd} variant="outline-success" size="sm" active>
        Sumar
      </Button>
      <Button onClick={handleSubstract} variant="outline-danger" size="sm" active>
        Restar
      </Button>
      <Button onClick={handleAddToCart}  size="sm" active>
        agregar al carrito
      </Button>
      </div>
    )
}
export default ItemCount