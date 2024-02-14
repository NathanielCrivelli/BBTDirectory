import './App.css';
import React, { useEffect, useState } from 'react';
import EpisodeList from './EpisodeList';
import Header from './Header';

function App() {
  
  const [episode, setEpisode] = useState(0);

  // useEffect(() => {
  //   fetch("https://us-central1-big-bang-theory-25fd5.cloudfunctions.net/bbt391581/bbt/episodes")
  //   .then(response => response.json())
  //   .then(data => data._embedded.episodes);
  // }) 

  return (
    <div>
      <Header />
      <EpisodeList />
    </div>
  );
}

export default App;
