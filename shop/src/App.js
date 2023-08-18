import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import './App.css';
import data from './data.js';
import Detail from './routes/Detail';

import treat1 from './img/cbfm.jpg'
import treat2 from './img/ckacl.jpg'
import treat3 from './img/enqn.jpg'

// 리액트 라우터 3 : URL 파라미터로 상세페이지 100개 만들기
function App() {

  let [treats] = useState(data);
  let navigate = useNavigate();

  return (
    <div className="App">

      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => { navigate('/') }}>Home</Nav.Link>
            {/* <Nav.Link onClick={() => { navigate(-1) }}>뒤로가기버튼</Nav.Link> */}
            <Nav.Link onClick={() => { navigate('/detail') }}>Detail</Nav.Link>
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

        <Route path='/detail/:id' element={<Detail treats={treats} />} />

        <Route path='/about' element={<About />}>
          <Route path='member' element={<div>Member</div>} />
          <Route path='location' element={<div>Company Location</div>} />
        </Route>

        <Route path='/event' element={<EventPage />}>
          <Route path='one' element={<p>첫 주문시 츄르 서비스</p>} />
          <Route path='two' element={<p>생일기념 츄르 받기</p>} />
        </Route>

        <Route path='*' element={<div>404 Page</div>} />
      </Routes>

    </div>
  );
}

let EventPage = () => {
  return (
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  );
}

let About = () => {
  return (
    <div>
      <h4>About Page</h4>
      <Outlet></Outlet>
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
