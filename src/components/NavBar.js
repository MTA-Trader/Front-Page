import { Navbar, NavbarBrand, Nav, NavLink } from 'reactstrap'

const NavBar = props => {
    return <Navbar expand="md" className="NavBar-nav" style={{ marginLeft: "1rem", marginRight: "1rem" }}>
        <NavbarBrand href="/">
            <img src='./../images/logo.png' style={{ maxHeight: "5rem" }} alt={"Mortgage Trading Analytics"} />
        </NavbarBrand>
        <Nav pills navbar style={{ fontWeight: 600 }}>
            <NavLink active href="https://tools.mta-trader.com/">
                Client Access
            </NavLink>
            <NavLink href="https://tools.mta-trader.com/contact">
                Contact Us
            </NavLink>
        </Nav>
    </Navbar>
}

export default NavBar