import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


const AddToListItem = ({ item }) => {
  const { name, type, description } = item

  return (
    <Row> 
      <Col className='width-80  m-auto p-2'>
        <h5>Name</h5>
        <h5>{name}</h5>
      </Col>
      <Col className='width-80  m-auto p-2'>
        <h5>Type</h5>
        <p>{type}</p>
      </Col>
      <Col md={6} className='width-80  m-auto p-2'>
        <h5>Description</h5>
        <p>{description}</p>
      </Col>
    </Row>
  )
}

export default AddToListItem