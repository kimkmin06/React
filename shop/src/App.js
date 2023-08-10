import { useState } from 'react';
import './App.css';
import data from './data.js'

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import treat1 from './img/cbfm.jpg'
import treat2 from './img/ckacl.jpg'
import treat3 from './img/enqn.jpg'

function App() {

  let [treats] = useState(data);

  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Cats</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

    {/* <div className='main-bg' style={{ backgroundImage : 'url(' + banner + ')' }}></div> */}
    <div className='main-bg'></div>

    <Container>
      <Row>
        <Col sm>
          <img src={ treat1 } width={"80%"}/>
          <h4>{ treats[0].title }</h4>
          <p>{ treats[0].price }</p>
        </Col>
        <Col sm>
          <img src={ treat2 } width={"80%"}/>
          <h4>{ treats[1].title }</h4>
          <p>{ treats[1].price }</p>
        </Col>
        <Col sm>
          <img src={ treat3 } width={"80%"}/>
          <h4>{ treats[2].title }</h4>
          <p>{ treats[2].price }</p>
        </Col>
      </Row>
    </Container>

    <div></div>

    </div>
  );
}

export default App;
