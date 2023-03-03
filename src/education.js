//added card and button components
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Card } from "react-bootstrap";

function Education() {
  return (
    <Card>
      <div>
        <h3>Education</h3>
        <br />
      </div>
      <div>
        <h4>
          <strong>2022 - 2023</strong>
        </h4>
        <h4>Web Development Bootcamp</h4>
        <h5>HyperionDev</h5>
      </div>
      <br />
      <div>
        <h4>
          <strong>1999 - 2004</strong>
        </h4>
        <h4>9 GSCEs</h4>
        <h5>Hazel Grove High School</h5>
      </div>
    </Card>
  );
}

export default Education;
