import './App.css';
import React, { useEffect, useState } from 'react';
import Header from './Header';
import Directory from './Directory';

function App() {
  
  const [data, setData] = useState([]);
  const [episode, setEpisode] = useState(0);

  useEffect(() => {
    fetch("https://us-central1-big-bang-theory-25fd5.cloudfunctions.net/bbt391581/bbt/episodes")
    .then(response => response.json())
    .then(data => setData(data?.data?._embedded?.episodes));
  })

  useEffect(() => {
    console.log(episode);
  },[episode])

  const episodeInput = function(ep) {
    setEpisode(ep)
  }

  return (
    <div>
      <Header />
      <Directory info={data} num={episode} onClick={episodeInput} />
    </div>
  );
}

export default App;
