import React from 'react';
import EpisodeInformation from './EpisodeInformation';
import EpisodeList from './EpisodeList';

function Directory() {
    return (
      <div className='Directory-Container'>
        <EpisodeList />
        <EpisodeInformation />
      </div>
    );
  }
  
  export default Directory;
  