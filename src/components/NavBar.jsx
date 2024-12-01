import CartWidget from "./CartWidget"
function NavBar(){
return(
    <header className="header">
    <nav className="nav">
        <ul className="ul">
            <li className="lista">Maiky Mouse</li>
            <li className="lista"><a href="../index.html" className="links">Home</a></li>
            <li className="lista">Inalambricos</li>
            <li className="lista">Gamers</li>
            <li className="lista">Oficina</li>
        </ul>
        <CartWidget/>
    </nav>
</header>
)
}
export default NavBar