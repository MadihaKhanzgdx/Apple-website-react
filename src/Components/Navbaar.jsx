import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import './Navbaar.css'

function Navbaar() {
  return <><Nav defaultActiveKey="/home" as="ul" className="center-nav">
      <Nav.Item as="li">
        <Nav.Link as={Link} to="/">Store</Nav.Link>
      </Nav.Item>
       <Nav.Item as="li">
        <Nav.Link as={Link} to="/">Mac</Nav.Link>
      </Nav.Item>
       <Nav.Item as="li">
        <Nav.Link as={Link} to="/">iPad</Nav.Link>
      </Nav.Item>
       <Nav.Item as="li">
        <Nav.Link as={Link} to="/">iPhone</Nav.Link>
      </Nav.Item>
       <Nav.Item as="li">
        <Nav.Link as={Link} to="/">Watch</Nav.Link>
      </Nav.Item>
       <Nav.Item as="li">
        <Nav.Link as={Link} to="/">Vision</Nav.Link>
      </Nav.Item>
       <Nav.Item as="li">
        <Nav.Link as={Link} to="/">Airpods</Nav.Link>
      </Nav.Item>
        <Nav.Item as="li">
        <Nav.Link as={Link} to="/">TV and Home</Nav.Link>
      </Nav.Item>
       <Nav.Item as="li">
        <Nav.Link as={Link} to="/">Entertainment</Nav.Link>
      </Nav.Item>
       <Nav.Item as="li">
        <Nav.Link as={Link} to="/">Accessories</Nav.Link>
      </Nav.Item>
        <Nav.Item as="li">
        <Nav.Link as={Link} to="/">Spport</Nav.Link>
      </Nav.Item>
       <Nav.Item as="li">
     <Nav.Link as={Link} to="/login">Sign In</Nav.Link>
      </Nav.Item>
    </Nav></>;
};

export default Navbaar;
