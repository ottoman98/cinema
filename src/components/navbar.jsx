import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';

import '../styles/navbar.css';

function OffcanvasExample() {
  let expand = 'md';
  return (
    <>
      <Navbar key={expand} expand={expand} className="mb-3">
        <Container fluid>
          <Navbar.Brand>
            <Link to="/">PCC</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title
                className="pcc"
                id={`offcanvasNavbarLabel-expand-${expand}`}
              >
                PCC
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="tra">
              <Nav className="justify-content-end flex-grow-1 pe-3 nav-item uwu">
                <Form className="d-flex nav-form">
                  <Form.Control
                    type="search"
                    placeholder="Pelicula, Serie, Genero,"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Link to="search">
                    <Button variant="outline-success">Buscar</Button>
                  </Link>
                </Form>
                <Nav.Link>
                  <Link to="i">Tierro</Link>
                </Nav.Link>
                <NavDropdown
                  title="Peliculas"
                  id={`offcanvasNavbarDropdown-expand-${expand}`}
                >
                  <NavDropdown.Item href="#action3">
                    Uso Carruso
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    El Cuchilla
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Lo mejor de alex marin
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                  title="Series"
                  id={`offcanvasNavbarDropdown-expand-${expand}`}
                >
                  <NavDropdown.Item href="#action3">
                    Uso Carruso
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    El Cuchilla
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Debates de polo polo Vol.4
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>

              <Nav.Link>
                <Link to="login">Iniciar sesion</Link>
              </Nav.Link>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default OffcanvasExample;
