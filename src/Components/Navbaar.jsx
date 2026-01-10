import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import './Navbaar.css'

function Navbaar() {
  return <><Nav defaultActiveKey="/home" as="ul" className="center-nav">
      <Nav.Item as="li">
        <Nav.Link href="/home">Store</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link eventKey="link-1">Mac</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link eventKey="link-2">iPad</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link eventKey="link-3">iPhone</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link eventKey="link-4">Watch</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link eventKey="link-5">Vision</Nav.Link>
      </Nav.Item>
       <Nav.Item as="li">
        <Nav.Link eventKey="link-6">AirPods</Nav.Link>
      </Nav.Item>
       <Nav.Item as="li">
        <Nav.Link eventKey="link-7">TV & Home</Nav.Link>
      </Nav.Item>
       <Nav.Item as="li">
        <Nav.Link eventKey="link-8">Entertainment</Nav.Link>
      </Nav.Item>
       <Nav.Item as="li">
        <Nav.Link eventKey="link-9">Accessories</Nav.Link>
      </Nav.Item>
       <Nav.Item as="li">
        <Nav.Link eventKey="link-10">Support</Nav.Link>
      </Nav.Item>
       <Nav.Item as="li">
     <Nav.Link as={Link} to="/login">Sign In</Nav.Link>
      </Nav.Item>
    </Nav></>;
};

export default Navbaar;
