import logo from "./logo.svg";
import "./App.css";
import {
  Button,
  Alert,
  Breadcrumb,
  Card,
  Form,
  Container,
  Row,
  Col,
} from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <Form>
            <Row>
              <Col md>
                <Form.Group controlId="forEmail">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control type="email" placeholder="Example@email.com" />
                  <Form.Text className="text-muted">
                    We'll never share your email address, trust us!
                  </Form.Text>
                </Form.Group>
              </Col>
              <Col md>
                <Form.Group controlId="forPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
              </Col>
            </Row>
            <Button variant="primary" type="submit">
              Login
            </Button>
          </Form>
          <Card className="mb-3" style={{ color: "#000" }}>
            <Card.Img src="https://steamuserimages-a.akamaihd.net/ugc/1687145900897600811/DFAD816EC609EA963A3D06472C2E27A7B99B3E0A/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false"></Card.Img>
            <Card.Body>
              <Card.Title>Card Example</Card.Title>
              <Card.Text>This is an example of react bootstrap cards</Card.Text>
              <Button variant="primary">Read More</Button>
            </Card.Body>
          </Card>
          <Breadcrumb>
            <Breadcrumb.Item>ROUND1</Breadcrumb.Item>
            <Breadcrumb.Item>ROUND2</Breadcrumb.Item>
            <Breadcrumb.Item active>ROUND3</Breadcrumb.Item>
          </Breadcrumb>
          <Alert variant="success">This is a button</Alert>
          <Button>Test Button</Button>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </Container>
      </header>
    </div>
  );
}

export default App;
