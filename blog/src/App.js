import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let [title, setTitle] = useState(['HTML', 'CSS', 'JS']);
  let [good, setGood] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [modalTitle, setModalTitle] = useState(0);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>Coding Apple</h4>
      </div>

      {
        title.map((a, i) => {
          return (
            <div className='list'>
              <h4 onClick={() => { setModal(!modal); setModalTitle(i) }}>
                { title[i] }
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

      {/* <button onClick={() => { setModalTitle(0) }}>글제목0</button>
      <button onClick={() => { setModalTitle(1) }}>글제목1</button>
      <button onClick={() => { setModalTitle(2) }}>글제목2</button> */}

      {
        modal ? <Modal modalTitle={modalTitle} setTitle={setTitle} title={title} /> : null
      }

    </div>
  );
}

let Modal = (props) => {
  return (
    <div className='modal'>
      <h4>{ props.title[props.modalTitle] }</h4>
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
