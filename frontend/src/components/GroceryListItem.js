import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

const GroceryListItem = ({ item }) => {
  const { name, aisle, type, description } = item[0]

  return (
    <Row className='width-80 border rounded m-auto p-2'>
      <Col md={1} className='width-80  m-auto p-2'>
        <h5>Aisle #</h5>
        <p>{aisle}</p>
      </Col>
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

export default GroceryListItem