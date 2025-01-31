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
      if (count > 1) {
        setCount(count - 1)
      }
    }
    const handleAddToCart = () => {
      if (count > 0) {
        addToCart({ ...item, quantity: count })
      }
  }
return(
    <div>
      <div>
        <p> Cantidad agregada: {count}</p>
      </div>
       <div className="button-detail">
         <Button onClick={handleSubstract}  variant="outline-dark" size="sm" active disabled={count <= 1}>
           Restar
        </Button>
        <Button onClick={handleAddToCart}   variant="outline-dark" size="sm" active disabled={count <= 0}>
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