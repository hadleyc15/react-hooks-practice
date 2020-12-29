import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function App() {
  const [status] = useState("Not Delivered");
  
  return (
    <div>
      <h1>The package is: {status}.</h1>
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);



