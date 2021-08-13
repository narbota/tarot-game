import React from 'react'
import './App.css';

import data from "./data";
import Tarot from "./Tarot";

export default function App() {
  // const [pull, setPull] = React.useState(data);

  return (
    <div className="App">
      <h1>3 Card Pull</h1>
      <h2> What is your question?</h2>
      <Tarot data={data} />
      
      
    </div>
  );
}


