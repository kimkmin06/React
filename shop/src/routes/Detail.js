import { useParams } from "react-router-dom";
import styled from 'styled-components';

// let Box = styled.div`
//   background : #777777;
//   padding : 20px;
// `
let YellowBtn = styled.button`
  background: ${props => props.bg};
  color: ${props => props.bg == 'blue'?'white':'black'};
  padding: 10px;
`
let NewBtn = styled.button(YellowBtn)

let Detail = (props) => {

  let { id } = useParams();
  let findProduct = props.treats.find((x) => {
    return x.id == id;
  })

  return (
    <div className="container">
      {/* <Box>
        <YellowBtn>btn</YellowBtn>
      </Box> */}
      <YellowBtn bg="blue">button</YellowBtn>
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