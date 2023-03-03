//added card and button components
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Card } from "react-bootstrap";

function Contact() {
  return (
    <Card>
      <h3>Contact</h3>
      <h4>Email</h4>
      <p>kat25688@gmail.com</p>
      <h4>Phone Number</h4>
      <p>078531 70057</p>
    </Card>
  );
}

export default Contact;
