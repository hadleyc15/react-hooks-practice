import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { FaStar } from "react-icons/fa";

const createArray = (length) => [
  ...Array(length)
]

function Star() {
  return <FaStar />;
}

function StarRating() {
  return createArray(5).map((n, i) => (
    <Star key={i} />
  ));
}

function App() { 
  return <StarRating />;
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);



