import { useState } from 'react';
import './App.css';
import data from './data.js';
import { Routes, Route, Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

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
            <Nav.Link href="#features">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* <Link to={"/"}>Home</Link>
      <Link to={"/detail"}>Cart</Link> */}

      <Routes>
        <Route path='/' element={
          <>
            <div className='main-bg'></div>
            <div className='container'>
              <Card treats={treats[0]} i={treat1}></Card>
              <Card treats={treats[1]} i={treat2}></Card>
              <Card treats={treats[2]} i={treat3}></Card>
            </div>
          </>
        } />
        <Route path='/detail' element={<div>상세페이지</div>} />
      </Routes>

    </div>
  );
}

let Card = (props) => {
  return (
    <div className='col-md-4'>
      <img src={props.i} width={"80%"} />
      {/* <img src={ '이미지 경로' + (props.i+1) + '.jpg' } width={"80%"} /> */}
      <h4>{props.treats.title}</h4>
      <p>{props.treats.price}</p>
    </div>
  );
};


export default App;
