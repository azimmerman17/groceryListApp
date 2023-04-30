import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';


const GroceryListItem = ({ item, selectedList, setSelectedList }) => {
  const { name, aisle, type, description, _id } = item[0]

  const handleClick = (e) => {
    e.target.checked ? setSelectedList([...selectedList, _id]) : (
      selectedList.forEach((item, i) => {
      item = _id ? setSelectedList(selectedList.splice(1,i,)) : null
      })
    )
  }
  
  return (
    <Form.Group>
      <Row className='width-80 border rounded m-auto p-2'>
        <Col md={1} className='width-80  m-auto p-2'>
          <Form.Check type="checkbox" value={_id} onClick={e => handleClick(e)}/>
        </Col>
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
    </Form.Group>
  )
} 

export default GroceryListItem