import React from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const getRequest = () => {
    axios.get('/test').then(res => {
      console.log(res);
    }).catch(err => { throw err })
  }
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => getRequest()}>
          MERNolith
        </button>

      </header>
    </div>
  );
}

export default App;