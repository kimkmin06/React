import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let [title, setTitle] = useState(['HTML', 'CSS', 'JS']);
  let [good, setGood] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>Coding Apple</h4>
      </div>

      {
        title.map((a, i) => {
          return (
            <div className='list'>
              <h4 onClick={() => { setModal(!modal) }}>{ title[i] }
                <span onClick={() => {
                  let copyGood = [...good];
                  copyGood[i] += 1;
                  setGood(copyGood);
                }}> ♡</span> {good[i]}
              </h4>
              <p>유튜브</p>
            </div>
          );
        })
      }

      {
        modal ? <Modal setTitle={setTitle} title={title} /> : null
      }

    </div>
  );
}

let Modal = (props) => {
  return (
    <div className='modal'>
      <h4>{ props.title[0] }</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={() => {
        let copyTitle = [...props.title];
        copyTitle[0] = "REACT";
        props.setTitle(copyTitle);
      }}>edit</button>
    </div>
  );
};

export default App;
