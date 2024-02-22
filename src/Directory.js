import React, { useEffect } from 'react';
import EpisodeInformation from './EpisodeInformation';
import EpisodeList from './EpisodeList';

function Directory(props) {

    useEffect(() => {
      console.log(props.info[0])
    },[props.info])

    return (
      <div className='Directory-Container'>
        <EpisodeList list={props.info} />
        <EpisodeInformation ep={props.info[props.num]}/>
      </div>
    );
  }
  
  export default Directory;
  