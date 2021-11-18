import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Image, Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from './images/logo.jpg';

const NavbarResp = () => {
    return (
        <Navbar bg="info" expand="lg">
            <Container>
                <Navbar.Brand href="#home">  <Image src={logo} width="70px"/>
                   { ' '} My Product Management Portal
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
                    <Nav.Link as={Link} to={"/product"}>Products</Nav.Link>
                    <Nav.Link as={Link} to={"/createProduct"}>Create Product</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
    </Navbar>
     );
}
 
export default NavbarResp;