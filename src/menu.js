//added card and button components
import Nav from "react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function Menu() {
  return (
    <Nav>
      <Nav.Item>
        <Nav.Link href="/">Summary</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/skills">Skills</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/experience">Experience</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/education">Education</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/references">References</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/contact">Contact</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default Menu;
