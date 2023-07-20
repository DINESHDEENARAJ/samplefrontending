import{Nav,  Navbar,  NavbarBrand,  NavDropdown} from 'react-bootstrap';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';

export const Mainpage=()=>
{
    return(
        <>
        <Navbar bg="light" expands="lg">
         <NavbarBrand href="#home">REACT-BOOTSTRAP</NavbarBrand>
         <NavbarToggle aria-controls="basic-navbar-nav"/>
         <NavbarCollapse id='basic-navbar-nav'>
             <Nav className="me-auto">
                <Nav.Link href="/create">CREATE</Nav.Link>
                <Nav.Link href="/update">UPDATE</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">ACTION</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">ANOTHER ACTION
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">SOMETHING ELSE</NavDropdown.Item>
                    <NavDropdown.Divider/>
                    <NavDropdown.Item href="#action/3.4">SEPARATE LINK
                    </NavDropdown.Item>
                </NavDropdown>
             </Nav>
         </NavbarCollapse>
        </Navbar>
        </>
    )
}