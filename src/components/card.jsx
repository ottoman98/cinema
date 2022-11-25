import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import '../styles/card.css';
import { Link } from 'react-router-dom';

function KitchenSinkExample(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.titulo}</Card.Title>
        <Card.Text>{props.review}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Fecha {props.fecha}</ListGroup.Item>
        <ListGroup.Item>Calificacion {props.calificacion}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">{props.director}</Card.Link>
        <Card.Link href="#">{props.genero}</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default KitchenSinkExample;
