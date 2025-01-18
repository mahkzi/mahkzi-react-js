import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
function Item({item}){
    return(
<Col lg={4}>
                <Card border="ligth" className="text-center">
                <Card.Img variant="top" src={item.thumbnail} />
                 <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>
            {item.price}$
        </Card.Text>
        <Button variant="primary" size="sm">Ir al detalle</Button>
      </Card.Body>
                </Card>
            </Col>
    )
}
export default Item