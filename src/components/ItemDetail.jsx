import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import ItemCount from './ItemCount'
function ItemDetail({item}){
    return(
        <Container>
        <Card className="text-center">
        <Card.Img variant="top" src={item?.image} />
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
        </Container>
    )
}
export default ItemDetail