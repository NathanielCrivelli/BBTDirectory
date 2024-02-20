import './App.css';
import React, { useEffect, useState } from 'react';
import Header from './Header';
import Directory from './Directory';

function App() {
  
  const [episode, setEpisode] = useState(0);
  const [data, setData] = useState();

  useEffect(() => {
    fetch("https://us-central1-big-bang-theory-25fd5.cloudfunctions.net/bbt391581/bbt/episodes")
    .then(response => response.json())
    .then(data => setData(data?.data?._embedded?.episodes));
  })

  return (
    <div>
      <Header />
      <Directory episode={data}/>
    </div>
  );
}

export default App;
