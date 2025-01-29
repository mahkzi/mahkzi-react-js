import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link, NavLink } from "react-router"
function NavBarLinks(){
    return(
       <>
        <Navbar.Brand to="/" as={Link}>Moghar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link to="/category/Mouses" as={NavLink}>Mouses</Nav.Link>
            <Nav.Link to="/category/Monitores" as={NavLink}>Monitores</Nav.Link>
            <Nav.Link to="/category/Auriculares" as={NavLink}>Auriculares</Nav.Link>
          </Nav>
          </>
    )
}
export default NavBarLinks