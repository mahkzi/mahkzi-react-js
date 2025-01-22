import { useState } from "react"
import Button from 'react-bootstrap/Button'
function ItemCount(){
    const [count, setCount] = useState(0)
    const handleAdd= () => {
        setCount(count+1)
    }
    const handleSubstract= () => {
        setCount(count-1)
    }
return(
    <>
    <p>{count}</p>
      <Button onClick={handleAdd} variant="outline-success" size="sm" active>
        Agregar al carrito
      </Button>
      <Button onClick={handleSubstract} variant="outline-danger" size="sm" active>
        Quitar del carrito
      </Button>
    </>
    )
}
export default ItemCount