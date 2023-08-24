import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from 'styled-components';
import { Nav } from 'react-bootstrap';

let Detail = (props) => {

  let [count, setCount] = useState(0);
  let [alert, setAlert] = useState(true);
  let [num, setNum] = useState('');
  let [tab, setTab] = useState('');

  useEffect(() => {
    if (isNaN(num) == true) {
      alert('NOPE');
    }
  }, [num])

  useEffect(()=>{
    let a = setTimeout(() => { setAlert(false) }, 2000)
    return () => {
      clearTimeout(a);
    }
  }, [count])

  let { id } = useParams();
  let findProduct = props.treats.find((x) => {
    return x.id == id;
  })

  return (
    <div className="container">
      {
        alert == true
        ? <div className="alert-warning">
          2초 이내 구매시 할인
          </div>
        : null
      }
      
      <div className="row">
        <div className="col-md-6">
          <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{findProduct.title}</h4>
          <p>{findProduct.content}</p>
          <p>{findProduct.price}원</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>

      <Nav variant="tabs" defaultActiveKey={"link0"}>
      <Nav.Item>
        <Nav.Link eventKey="link0">button1</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link1">button2</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link2">button3</Nav.Link>
      </Nav.Item>
      </Nav>
      <div>내용0</div>
      <div>내용1</div>
      <div>내용2</div>

    </div>
  );
}

export default Detail;