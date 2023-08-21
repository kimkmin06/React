import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from 'styled-components';

let Detail = (props) => {

  useEffect(()=>{
    let a = setTimeout(() => { setAlert(false) }, 2000)

    // clean up function
    //기존 데이터 요청은 제거해야함
    return () => {
      clearTimeout(a);
    }
  }, [count])

  let [count, setCount] = useState(0)
  let [alert, setAlert] = useState(true)

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