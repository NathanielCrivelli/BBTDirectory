import React, { useEffect } from 'react';
import EpisodeInformation from './EpisodeInformation';
import EpisodeList from './EpisodeList';

function Directory(props) {
    useEffect(() => {
      console.log(props.episode[0])
    },[])

    return (
      <div className='Directory-Container'>
        <EpisodeList />
        <EpisodeInformation episode={props?.episode[0]}/>
      </div>
    );
  }
  
  export default Directory;
  