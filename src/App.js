import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";
import "./App.css";
import ContactForm from "./component/ContactForm";
import ContactList from "./component/ContactList";

function App() {
  return (
    <Container>
      <h1 className="title">Phone Book</h1>
      <Row>
        <Col lg={6} md={6} sm={12}>
          <ContactForm />
        </Col>
        <Col lg={6} md={6} sm={12}>
          <ContactList />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
