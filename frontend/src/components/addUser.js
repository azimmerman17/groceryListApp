import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const AddUser = () => {
  return (
    <Form>
      <Form.Group className='mb-3'>
        <Form.Label htmlFor='first-name-new-user'>First Name:</Form.Label>
          <Form.Control id='first-name-new-user' placeholder='Enter your First Name' />
      </Form.Group>
      <Form.Group className='mb-3'>
        <Form.Label htmlFor='last-name-new-user'>Last Name:</Form.Label>
        <Form.Control id='last-name-new-user' placeholder='Enter your Last Name' />
      </Form.Group>
      <Form.Group className='mb-3'>
        <Form.Label htmlFor='email-new-user'>Email:</Form.Label>
        <Form.Control id='email-new-user' placeholder='Enter your email' />
      </Form.Group>
      <Form.Group className='mb-3'>
        <Form.Label htmlFor='password-new-user'>Password:</Form.Label>
        <Form.Control id='password-new-user' placeholder='Enter your password' />
      </Form.Group>
      <Button type="submit">Submit</Button>
    </Form>
  );
}

export default AddUser
