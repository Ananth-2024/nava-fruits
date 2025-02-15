import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container, Form, FormControl, Button, OverlayTrigger, Tooltip, Badge } from 'react-bootstrap';

function FruitHopNavbar() {
  const [cartCount,] = useState(0); // Example cart count

  return (
    <Navbar className="shadow-lg" expand="lg" sticky="top" style={{
      background: 'linear-gradient(135deg, #ff4d4d, #ffcc29)',  // Watermelon Red to Mango Yellow
      backdropFilter: 'blur(10px)',
      padding: '12px 0',
      borderBottom: '3px solid #ff6600'
    }}>
      <Container>
        {/* Logo */}
        <Navbar.Brand href="/" className="fw-bold fs-3" style={{ color: '#fff', letterSpacing: '2px' }}>
          NAVA<span style={{ color: '#4caf50' }}>Fruit Shop</span>
        </Navbar.Brand>

        {/* Search Bar */}
        <Form className="d-none d-lg-flex ms-3" style={{
          maxWidth: '320px', border: '2px solid #ff6600', borderRadius: '30px', overflow: 'hidden'
        }}>
          <FormControl
            type="search"
            placeholder="Search for fresh fruits..."
            className="border-0 shadow-none px-3"
            style={{ borderRadius: '30px' }}
          />
          <Button className="btn text-white fw-bold" style={{ backgroundColor: '#ff6600', borderRadius: '0 30px 30px 0' }}>
            <i className="bi bi-search"></i>
          </Button>
        </Form>

        {/* Mobile Toggle */}
        <Navbar.Toggle aria-controls="navbar-nav" className="border-0 text-white" />

        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            {["Home", "Shop", "Cart", "Account", "Contact"].map((item, index) => (
              <OverlayTrigger key={index} placement="bottom" overlay={<Tooltip>{item}</Tooltip>}>
                <Nav.Link 
                  href={`/${item.toLowerCase()}`} 
                  className="text-white mx-2 nav-link-custom"
                >
                  <i className={`bi bi-${
                    item.toLowerCase() === 'cart' ? 'basket-fill' :
                    item.toLowerCase() === 'home' ? 'house-fill' :
                    item.toLowerCase() === 'account' ? 'person-circle' :
                    item.toLowerCase() === 'contact' ? 'envelope-fill' : ''
                  }`}></i> {item}

                  {/* Cart Badge */}
                  {item === 'Cart' && cartCount > 0 && (
                    <Badge pill bg="warning" text="dark" className="ms-1">
                      {cartCount}
                    </Badge>
                  )}
                </Nav.Link>
              </OverlayTrigger>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default FruitHopNavbar;
