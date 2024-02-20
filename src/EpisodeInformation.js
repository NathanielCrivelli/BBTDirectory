import React from 'react';

function EpisodeInformation(props) {
    return (
      <div className='Episode-Information'>
        <h4 className='Episode-Name-Box'>
            Episode Name: {props.episode.name}
        </h4>
        <div className='Episode-Information-Box'>
            Info: {props.episode.airstamp}
        </div>
        <div className='Episode-Description-Box'>
            Description: {props.episode.summary}
        </div>
      </div>
    );
  }
  
  export default EpisodeInformation;