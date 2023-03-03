//added card and button components
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Card } from "react-bootstrap";

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

export default Experience;
