import React from 'react';
import EpisodeInformation from './EpisodeInformation';
import EpisodeList from './EpisodeList';

function Directory(props) {

    // useEffect(() => {
    //   console.log(props.info[props.num])
    // },[props.num])

    return (
      <div className='Directory-Container'>
        <EpisodeList list={props.info} onChange={props.onClick}/>
        <EpisodeInformation ep={props.info[props.num]}/>
      </div>
    );
  }
  
  export default Directory;
  