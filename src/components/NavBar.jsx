import Navbar from 'react-bootstrap/Navbar';
import CartWidget from "./CartWidget";
import NavBarContainer from './NavBarContainer';
function NavBar(){
return(
    <Navbar bg="dark" data-bs-theme="dark">
        <NavBarContainer/>
        <CartWidget/>
      </Navbar>
)
}
export default NavBar