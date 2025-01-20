import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ItemDetailCarousel from './ItemDetailCarousel';
function ItemDetail(item){
    return(
        <Container>
        <Card className="text-center">
             <ItemDetailCarousel item={item}/>
        <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
         </Card.Body>
         </Card>
        </Container>
    )
}
export default ItemDetail