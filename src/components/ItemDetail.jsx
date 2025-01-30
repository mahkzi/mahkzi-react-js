import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import ItemCount from './ItemCount'
function ItemDetail({item}){
    return(
        <Container>
             <Card className="text-center">
            <div>
                <img src={item?.image} alt="img-producto" />
            </div>
            <div>
            <Card className="cart-detail">
        <Card.Body>
        <Card.Title>{item?.name}</Card.Title>
        <Card.Text>
            {item?.price}$
        </Card.Text>
        <Card.Text>
            {item?.description}
        </Card.Text>
        <ItemCount item={item} />
         </Card.Body>
            </Card>
            </div>
         </Card>
        </Container>
    )
}
export default ItemDetail