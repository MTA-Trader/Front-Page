import { Navbar, NavbarBrand, Nav, Button } from 'reactstrap'

const NavBar = props => {
    return <Navbar light expand="md" className="NavBar-nav" style={{ marginLeft: "1rem", marginRight: "1rem" }}>
        <NavbarBrand href="/">
            <img src='./../images/logo.png' style={{ maxHeight: "5rem" }} alt={"Mortgage Trading Analytics"} />
        </NavbarBrand>
        <Nav right navbar>
            <Button style={{ fontWeight: 600, borderWidth: "medium" }} outline href="https://tools.mta-trader.com">
                Client Access
            </Button>
        </Nav >
    </Navbar>
}

export default NavBar