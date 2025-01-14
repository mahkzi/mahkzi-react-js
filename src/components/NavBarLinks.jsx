import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router";
function NavBarLinks(){
    return(
       <>
        <Navbar.Brand to="/" as={Link}>Maiky Mouse</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link to="#home" as={Link}>Home</Nav.Link>
            <Nav.Link to="#features" as={Link}>Features</Nav.Link>
            <Nav.Link to="#pricing" as={Link}>Pricing</Nav.Link>
          </Nav>
          </>
    )
}
export default NavBarLinks