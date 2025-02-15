import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function AppFooter() {
  return (
    <footer className="bg-dark text-light py-4">
      <Container>
        <Row>
          {/* Column 1: About Section */}
          <Col xs={12} md={4} className="mb-3 mb-md-0">
            <h5>About Us</h5>
            <p>We provide the freshest and highest quality fruits directly from farms to your table.</p>
          </Col>

          {/* Column 2: Quick Links */}
          <Col xs={6} md={4} className="mb-3 mb-md-0">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-light text-decoration-none">Home</Link></li>
              <li><Link to="/products" className="text-light text-decoration-none">Our Fruits</Link></li>
              <li><Link to="/about" className="text-light text-decoration-none">About Us</Link></li>
              <li><Link to="/contact" className="text-light text-decoration-none">Contact</Link></li>
            </ul>
          </Col>

          {/* Column 3: Contact Information */}
          <Col xs={6} md={4}>
            <h5>Contact Us</h5>
            <p>Email: <a href="mailto:support@fruitshop.com" className="text-light">support@fruitshop.com</a></p>
            <p>Phone: <a href="tel:+1234567890" className="text-light">+1 234 567 890</a></p>
          </Col>
        </Row>

        {/* Footer Bottom Section */}
        <Row className="mt-3">
          <Col className="text-center">
            <p className="mb-0">&copy; {new Date().getFullYear()} Fruit Shop. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default AppFooter;
