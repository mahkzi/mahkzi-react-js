import Form from 'react-bootstrap/Form'
import { Button } from 'react-bootstrap'
import { useCart} from '../context/CartContext'
import { newOrder } from '../firebase/database'
import { serverTimestamp } from 'firebase/firestore'

const CheckOut = () =>{
    const {cart, totalPurchase} = useCart()
    const handleSubmit = (e) =>{
        e.preventDefault()

        const form= e.target
        const [name, email, phone] = form

        const order = {
            buyer:{name: name.value, email: email.value, phone: phone.value},
            items: cart,
            date: serverTimestamp(),
            total:totalPurchase()
        }
        newOrder(order)
    }
return(
    <div className='container-form'>
    <Form className='w-25 mt-5' onSubmit={handleSubmit}>
        <h2 className='title-form'>Complete los datos para finalizar su compra</h2>
        <Form.Group  className="mb-3" controlId="name">
        <Form.Label column sm="2">
          Nombre:
        </Form.Label>
          <Form.Control type="text" placeholder="Ingrese su nombre" required/>
      </Form.Group>
     <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Correo electrónico:</Form.Label>
        <Form.Control type="email" placeholder="nombre@ejemplo.com" required/>
      </Form.Group>
        <Form.Group className="mb-5" controlId="phone">
        <Form.Label column sm="2">
            Telefóno:
            <Form.Control type="text" placeholder="+5491176379353" required/>
        </Form.Label>
        </Form.Group>
        <Button variant="outline-dark" type='submit'>Finalizar la compra</Button>
  </Form>
  </div>
)
}
export default CheckOut