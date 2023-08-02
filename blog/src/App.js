import logo from './logo.svg';
import './App.css';

function App() {

  let post = 'React 강좌';

  return (
    <div className="App">
      <div className="black-nav">
        <h4>Coding Apple</h4>
      </div>
      <h4>{ post }</h4>
    </div>
  );
}

export default App;
