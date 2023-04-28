import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './components/CartWidget';
import  Image  from "./assets/images/logoprincipal.png";


function Barra() {

  

  


  return (
    <Navbar expand="lg" bg="black" variant="dark">
      
      
<Container>
<img src={Image} alt="" />
        <Navbar.Brand href="#home">INSUMOS PARA IMPRESION 3D</Navbar.Brand>
        <img src={Image} alt="" />
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="">
          <Nav className="">
            <Nav.Link href="https://www.thingiverse.com/">Archivos STL Gratis</Nav.Link>
            
            <NavDropdown title="NUESTROS PRODUCTOS" id="">
              <NavDropdown.Item href="#filamentos">Filamentos</NavDropdown.Item>
              <NavDropdown.Item href="#repuestos">Repuestos </NavDropdown.Item>
              <NavDropdown.Item href="#impresoras">Impresoras 3D</NavDropdown.Item>
              <NavDropdown.Item href="#arhivos">Archivos STL</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          
        </Navbar.Collapse>
      {/* cart widget */}
      <CartWidget />
      </Container>
      
    
    </Navbar>
  )}
  
export default Barra;

