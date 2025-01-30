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
      <div><p> Cantidad agregada: {count}</p></div>
    <div className="button-detail">
      <Button onClick={handleSubstract}  variant="outline-dark" size="sm" active>
        Restar
      </Button>
      <Button onClick={handleAddToCart}   variant="outline-dark" size="sm" active>
        agregar al carrito
      </Button>
      <Button onClick={handleAdd}  variant="outline-dark" size="sm" active>
        Sumar
      </Button>
      </div>
      </div>
    )
}
export default ItemCount