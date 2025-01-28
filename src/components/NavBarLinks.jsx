import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router";
function NavBarLinks(){
    return(
       <>
        <Navbar.Brand to="/" as={Link}>Moghar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link to="/category/Smartphones" as={Link}>Smartphones</Nav.Link>
            <Nav.Link to="/category/tablets" as={Link}>Tablets</Nav.Link>
            <Nav.Link to="/category/Laptops" as={Link}>Laptops</Nav.Link>
          </Nav>
          </>
    )
}
export default NavBarLinks