import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import SignOut from './SignOut';

const NavBar = () => {

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand className="text-white" href="/"><h2>Home</h2></Navbar.Brand>
        <Navbar.Toggle className="text-white" aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="text-white" href="/user/list">Grocery List</Nav.Link>
            <Nav.Link className="text-white" href="/foods/foodlist">Add to Grocery List</Nav.Link>
            <Nav.Link className="text-white" href="/user/addUser">New User</Nav.Link>           
          </Nav>
          <SignOut />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
