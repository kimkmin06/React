import { useParams } from "react-router-dom";

let Detail = (props) => {

  let {id} = useParams();

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{ props.treats[id].title }</h4>
          <p>{ props.treats[id].content }</p>
          <p>{ props.treats[id].price }원</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  );
}

export default Detail;