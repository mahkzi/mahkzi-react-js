import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router";
function NavBarLinks(){
    return(
       <>
        <Navbar.Brand to="/" as={Link}>Moghar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link to="#home" as={Link}>Ropa Masculina</Nav.Link>
            <Nav.Link to="#features" as={Link}>Ropa Femenina</Nav.Link>
            <Nav.Link to="#pricing" as={Link}>Joyería</Nav.Link>
          </Nav>
          </>
    )
}
export default NavBarLinks