import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function card(props) {
  return (
   
    <Card className='card' style={{ width: '18rem' }}>
      <div className='img-container'>
        <Card.Img variant="top" src={props.img} />
      </div>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.desc}</Card.Text>
        <Button variant="primary">{props.btnTxt}</Button>
      </Card.Body>
    </Card>

  );
}

export default card;