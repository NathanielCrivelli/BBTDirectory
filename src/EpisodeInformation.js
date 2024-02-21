import React from 'react';

function EpisodeInformation(props) {

    return (
      <div className='Episode-Information'>
        <h4 className='Episode-Name-Box'>
            Episode Name: {!props.ep ? "Loading..." : props.ep.name}
        </h4>
        <div className='Episode-Information-Box'>
            Info: {!props.ep ? "Loading..." : props.ep.summary}
        </div>
        <div className='Episode-Description-Box'>
            Description: {}
        </div>
        <img src={!props.ep ? "Loading..." : props.ep.url} />
      </div>
    );
  }
  
  export default EpisodeInformation;