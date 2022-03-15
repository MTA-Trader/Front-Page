import { Navbar, NavbarBrand, Nav, NavLink } from 'reactstrap'

const NavBar = props => {
    return <Navbar expand="md" className="NavBar-nav" style={{ marginLeft: "1rem", marginRight: "1rem" }}>
        <NavbarBrand href="/">
            <img src='./../images/logo.png' style={{ maxHeight: "5rem" }} alt={"Mortgage Trading Analytics"} />
        </NavbarBrand>
        <Nav pills navbar style={{ fontWeight: 600 }}>
            <NavLink style={{ paddingRight: "0.5rem", paddingLeft: "0.5rem" }} active href="https://tools.mta-trader.com/">
                Client Access
            </NavLink>
            <NavLink style={{ paddingRight: "0.5rem", paddingLeft: "0.5rem" }} href="https://tools.mta-trader.com/contact">
                Contact Us
            </NavLink>
        </Nav>
    </Navbar>
}

export default NavBar