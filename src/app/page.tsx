import { PeopleFill, FileEarmarkTextFill, Calendar2CheckFill } from 'react-bootstrap-icons';
import { Col, Container, Row } from 'react-bootstrap';

/** The Home page. */
const Home = () => (
  <main>
    <Container id="landing-page" fluid className="py-5">
      <Row>
        <Col className="text-center">
          <PeopleFill size={100} />
          <h1>This Address Book</h1>
          <h5>
            Enables any number of users to register and save their business contacts. You can only see the contacts you
            have created.
          </h5>
        </Col>
        <Col className="text-center">
          <FileEarmarkTextFill size={100} />
          <h1>Save Contact Details</h1>
          <h5>For each contact, you can save their name, address, and phone number.</h5>
        </Col>
        <Col className="text-center">
          <Calendar2CheckFill size={100} />
          <h1>Contact History</h1>
          <h5>
            Each time you make contact with a contact, you can write a note that summarizes the conversation. This note
            is saved along with a timestamp with the contact.
          </h5>
        </Col>
      </Row>
    </Container>
  </main>
);

export default Home;
