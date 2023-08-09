import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let [title, setTitle] = useState(['HTML', 'CSS', 'JS']);
  let [good, setGood] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [modalTitle, setModalTitle] = useState(0);
  let [inputValue, setInputValue] = useState('');

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
                <span onClick={(e) => {
                  e.stopPropagation();
                  let copy = [...good];
                  copy[i] += 1;
                  setGood(copy);
                }}> ♡</span> {good[i]}
              </h4>
              <p>Youtube</p>
              <button onClick={(a, i) => {
                let copy = [...title];
                copy.splice(i, 1);
                setTitle(copy);
              }}>delete</button>
            </div>
          );
        })
      }

      <input onChange={(e) => { setInputValue(e.target.value) }}/>
      <button onClick={() => {
        let copy = [...title];
        copy.unshift(inputValue);
        setTitle(copy);
      }}>upload</button>

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
        let copy = [...props.title];
        copy[0] = "REACT";
        props.setTitle(copy);
      }}>edit</button>
    </div>
  );
};

export default App;
