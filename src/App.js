//added card and button components
import { Routes, Route } from "react-router-dom";
import picture from "./profile_picture.jpg";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Card } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Menu />
      <Header />

      <Routes>
        <Route exact path="/" element={<Summary />} />
        <Route exact path="/skills" element={<Skills />} />
        <Route exact path="/experience" element={<Experience />} />
        <Route path="/education" element={<Education />} />
        <Route path="/references" element={<References />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

function Header() {
  return (
    <div className="flex-container">
      <div>
        <img className="image" alt="profile" src={picture} />
      </div>
      <div className="textMid">
        <h1>Kat Mason</h1>
        <h2>Graduate Web Developer</h2>
      </div>
    </div>
  );
}

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

function Experience() {
  return (
    <Card>
      <h3>Experience</h3>
      <div>
        <h4>
          <strong>July 2022 - Present</strong>
        </h4>
        <h4>Pimberly, Manchester/WFH</h4>
        <h3>Quality Assurance Test Analyst</h3>
        <p>
          As a Quality Assurance Test Analyst everyday is different. My
          specialised area that I look after is the integration side of the
          product information management software. I test the deployments that
          the developers have released to BigCommerce to ensure that everything
          is working as specified on the ticket that has been raised whether it
          be a bug fix or an enhancement.
        </p>
      </div>
      <div>
        <h4>
          <strong>Nov 2018 - July 2022</strong>
        </h4>
        <h4>Ellis Brigham, Salford/WFH</h4>
        <h3>Online Product Co-ordinator</h3>
        <p>
          At Ellis Brigham I look after all things website product related. My
          day to day involves me setting up new products via our product
          information management system (Pimberly). I manage product life cycles
          from basic data through to live on site. My role involves me closely
          working with external suppliers via Jira/Trello/DoneDone/ZenDesk to
          ensure that product is displayed as expected in a timely manner.
          <br />
          I'm passionate about implementing more efficient processes and always
          looking for new ways to improve these. My role also involves me with
          end to end bug testing on site and backend, working from our stock
          system, through to our CMS and merchandising software.
        </p>
      </div>
      <div>
        <h4>
          <strong>Jun 2015 - Nov 2018</strong>
        </h4>
        <h4>Simply Bearing LTD, Leigh</h4>
        <h3>E-commerce Executive</h3>
        <p>
          Within Simply Bearings my duties involved creating bespoke PHP pages
          with algorithm based user journeys by using Sublime text and SmartGit.
          I was also tasked with reporting on new releases to the site using
          GitHub on a varied array of browser platforms and user devices. In
          addition; I dealt with general IT issues within the business as well
          as setting up new starters, configuring user permissions and
          installing user software whilst maintaining licence agreements.
          Further to this I created training material and user documents to help
          new starters settle in. <br />
          My work also involved photography of new stock, manipulating imagery
          and publishing to the website, whilst creating product ranges from
          supplier catalogues. On occasion I would also be creating 360-degree
          videos for products including “how to use” videos. My role also
          included creating and reviewing SEO data with content sent from our
          marketing client.
        </p>
      </div>
    </Card>
  );
}

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

function References() {
  return (
    <Card>
      <h3>References</h3>
      <p>Available upon request</p>
    </Card>
  );
}

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

export default App;
