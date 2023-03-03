//added card and button components
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Card } from "react-bootstrap";

function Skills() {
  return (
    <Card>
      <table>
        <tr>
          <th>
            <h3>Expertise</h3>
          </th>
          <th>
            <h3>Skills</h3>
          </th>
        </tr>
        <tr>
          <td>
            <ul>
              <li>JavaScript</li>
              <li>HTML & CSS</li>
              <li>React & Node.js</li>
              <li>Mongo DB</li>
              <li>API</li>
            </ul>
          </td>

          <td>
            <ul>
              <li>Problem Solving</li>
              <li>Attention to detail</li>
              <li>Logical minded</li>
              <li>Organised</li>
            </ul>
          </td>
        </tr>
      </table>
    </Card>
  );
}

export default Skills;
