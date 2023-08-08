import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let [title, setTitle] = useState(['HTML', 'CSS', 'JS']);
  let [good, setGood] = useState(0);
  let [modal, setModal] = useState(false);

  function clickHeart() {
    setGood(good += 1);
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
        setTitle(copyTitle);
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
        <h4 onClick={() => { setModal(!modal) }}>{title[2]}</h4>
        <p>니코쌤</p>
      </div>

      {
        modal ? <Modal></Modal> : null
      }

    </div>
  );
}

let Modal = () => {
  return (
    <div className='modal'>
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
};

export default App;
