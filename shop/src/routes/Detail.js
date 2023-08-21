import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from 'styled-components';

let Detail = (props) => {

  useEffect(()=>{
    for (let i=0; i<10000; i++) {
      console.log(1);
    }
  })

  // setTimeout(() => {

  // }, 2000)

  let [count, setCount] = useState(0)

  let { id } = useParams();
  let findProduct = props.treats.find((x) => {
    return x.id == id;
  })

  return (
    <div className="container">
      <div className="alert-warning">
        2초 이내 구매시 할인
      </div>
      {count}
      <button onClick={()=>{setCount(count+1)}}>button</button>
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
    </div>
  );
}

export default Detail;