import { Navbar, NavbarBrand, Nav, NavItem, Collapse, NavbarToggler, UncontrolledDropdown, DropdownMenu, DropdownItem } from 'reactstrap'

const NavBar = props => {
    return <Navbar light expand="md" className="NavBar-nav">
        <NavbarBrand href="/">
            <img src='./../images/logo.png' style={{maxHeight: "5rem"}} />
        </NavbarBrand>
    </Navbar>
}

export default NavBar