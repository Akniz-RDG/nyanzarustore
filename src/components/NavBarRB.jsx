import '../css/NavBar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidgetIcons from './CartWidgetIcons';
import { NavLink } from 'react-router-dom';

function NavBarRB() {
  console.log('Navbar')
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={NavLink} to='/'>
            <img src='../logo-shop.png' alt='logo' className='logo'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to='/'>Bazar dorado</Nav.Link>
            <NavDropdown title="productos" id="basic-nav-dropdown">
              <NavDropdown.Item as={NavLink} to="/category/Ekene-Afa">Ekene-Afa</NavDropdown.Item>
              <NavDropdown.Divider />

              <NavDropdown.Item as={NavLink} to="/category/Ifan Talro’a">
                Ifan Talro’a
              </NavDropdown.Item>
                <NavDropdown.Divider />
              <NavDropdown.Item as={NavLink} to="/category/Jessamine">Jessamine</NavDropdown.Item>
             
            </NavDropdown>
          </Nav>
         <NavLink to='/cart' style={{textDecoration:'none', color:'black'}}><CartWidgetIcons/></NavLink> 
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarRB;