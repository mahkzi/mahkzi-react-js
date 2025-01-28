import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router";
function NavBarLinks(){
    return(
       <>
        <Navbar.Brand to="/" as={Link}>Moghar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link to="/category/smartphones" as={Link}>Smartphones</Nav.Link>
            <Nav.Link to="/category/tablets" as={Link}>Tablets</Nav.Link>
            <Nav.Link to="/category/laptops" as={Link}>Laptops</Nav.Link>
          </Nav>
          </>
    )
}
export default NavBarLinks