import '../css/NavBar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidgetIcons from './CartWidgetIcons';
import { NavLink } from 'react-router-dom';

function NavBarRB() {
  console.log('Navbar');
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={NavLink} to='/'>
          <img src="/img/logo-shop.png" alt='logo' className='logo-shop-p'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to='/'>Home</Nav.Link>

            <NavDropdown title="Príncipes Mercantes" id="basic-nav-dropdown">
              <NavDropdown.Item as={NavLink} to="/category/Ekene-Afa">Ekene-Afa</NavDropdown.Item>
              <NavDropdown.Divider />

              <NavDropdown.Item as={NavLink} to="/category/Ifan Talro’a">Ifan Talro’a</NavDropdown.Item>
              <NavDropdown.Divider />

              <NavDropdown.Item as={NavLink} to="/category/Jessamine">Jessamine</NavDropdown.Item>
              <NavDropdown.Divider />

              <NavDropdown.Item as={NavLink} to="/category/Jobal">Jobal</NavDropdown.Item>
              <NavDropdown.Divider />

              <NavDropdown.Item as={NavLink} to="/category/Kwayothé">Kwayothé</NavDropdown.Item>
              <NavDropdown.Divider />

              <NavDropdown.Item as={NavLink} to="/category/Wakanga O’tamu">Wakanga O’tamu</NavDropdown.Item>
              <NavDropdown.Divider />

              <NavDropdown.Item as={NavLink} to="/category/Zhanthi">Zhanthi</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <CartWidgetIcons/>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarRB;
