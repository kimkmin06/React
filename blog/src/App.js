import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = 'React 강좌';
  let [title, changeTitle] = useState(['HTML', 'CSS', 'JS']);
  let [good, changeGood] = useState(0);

  function clickHeart() {
    changeGood(good += 1);
  };

  return (
    <div className="App">
      <div className="black-nav">
        <h4>Coding Apple</h4>
      </div>

      <button onClick={() => {
        //가나다순 정렬 코드
      }}>sort</button>

      <button onClick={() => {
        let copyTitle = [...title];
        copyTitle[0] = 'REACT';
        changeTitle(copyTitle);
      }}>edit</button>

      <div className="list">
        <h4>{title[0]} <span onClick={clickHeart}>♡</span> {good} </h4>
        <p>유튜브</p>
      </div>
      <div className='list'>
        <h4>{title[1]}</h4>
        <p>유튜브</p>
      </div>
      <div className='list'>
        <h4>{title[2]}</h4>
        <p>니코쌤</p>
      </div>



      <Modal></Modal>

    </div>
  );
}

// let Modal = () => {
//   return (
//     <div className='modal'>
//       <h4>제목</h4>
//       <p>날짜</p>
//       <p>상세내용</p>
//     </div>
//   );
// };

function Modal() {
  return (
    <div className='modal'>
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;
