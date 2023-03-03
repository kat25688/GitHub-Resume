//added card and button components
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Card } from "react-bootstrap";

function Summary() {
  return (
    <Card>
      <h3>Summary</h3>
      <p>
        In my 10+ years in eCommerce I have gained valuable knowledge and
        commercial experience. I have been involved in development projects
        across several bespoke eCommerce platforms, enhancing site usability and
        end to end user testing. I'm analytical minded and have great problem
        solving skills. I have just completed a web development bootcamp and I
        am looking to transition into a junior frontend web developer role to
        utilise the skills I've learnt on my course.
      </p>
      <Button
        variant="secondary"
        href="https://www.linkedin.com/in/kat-m-8755ba156/"
      >
        Linkedin Profile
      </Button>

      <Button
        variant="secondary"
        href="https://www.hyperiondev.com/portfolio/118347/"
      >
        Portfolio
      </Button>
    </Card>
  );
}

export default Summary;
