import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router';
function Item({item}){
    return(
<Col lg={4}>
                <Card border="ligth" className="text-center">
                <Card.Img variant="top" src={item.image} />
                 <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>
            {item.price}$
        </Card.Text>
        <Card.Text>
            {item.description}$
        </Card.Text>
        <Button variant="primary" size="sm" as={Link} to={`/product/${item.id}`}>Ir al detalle</Button>
      </Card.Body>
                </Card>
            </Col>
    )
}
export default Item