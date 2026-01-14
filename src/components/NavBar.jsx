import { Navbar, NavbarBrand, Nav, NavLink } from 'reactstrap'
import { Link } from 'react-router-dom'

const NavBar = props => {
    return <Navbar expand="md" className="NavBar-nav" style={{ marginLeft: "1rem", marginRight: "1rem" }}>
        <Link to="/">
            <img src='./../images/logo.png' style={{ maxHeight: "5rem" }} alt={"Mortgage Trading Analytics"} />
        </Link>
        <Nav pills navbar style={{ fontWeight: 600, flexFlow: "row" }}>
            <NavLink style={{ color: "white", paddingRight: "0.5rem", paddingLeft: "0.5rem" }} active href="https://tools.mta-trader.com/">
                Client Access
            </NavLink>
            <Link style={{ color: "rgb(13, 110, 253)",padding: "0.5rem 0.5rem 0 0.5rem", textDecoration: "none" }} to="/contact">
                Contact Us
            </Link>
        </Nav>
    </Navbar>
}

export default NavBar