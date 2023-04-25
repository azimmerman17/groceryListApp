import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const AddFood = () => {
  return (
    <Form>
      <Form.Group className='mb-3'>
        <Form.Label htmlFor='name-new-food'>Name:</Form.Label>
          <Form.Control id='name-new-food' placeholder='Enter Food Name' />
      </Form.Group>
      <Form.Group className='mb-3'>
        <Form.Label htmlFor='aisle-new-food'>Aisle #:</Form.Label>
        <Form.Control id='aisle-new-food' type='number' placeholder='Enter Ailse Number' />
      </Form.Group>
      <Form.Group className="mb-3">
          <Form.Label htmlFor="type-new-food">Select Food Type</Form.Label>
          <Form.Select id="type-new-food" placeholder='Select Food Type'>
            <option>Enum List</option>
          </Form.Select>
        </Form.Group>
      <Form.Group className='mb-3'>
        <Form.Label htmlFor='decripton-new-food'>Description:</Form.Label>
        <Form.Control id='decripton-new-food' placeholder='Enter Description' />
      </Form.Group>
      <Button type="submit">Submit</Button>
    </Form>
  );
}

export default AddFood