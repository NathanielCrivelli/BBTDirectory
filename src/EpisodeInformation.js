import React from 'react';

function EpisodeInformation(props) {

    const removeEnds = function(text) {
      let result = text.substring(3, text.length - 4);
      return result;
    }

    return (
      <div className='Episode-Information'>
        <h4 className='Episode-Name-Box'>
            Episode Name: {!props.ep ? "Loading..." : props.ep.name}
        </h4>
        <div className='Episode-Information-Box'>
            Info: {!props.ep ? "Loading..." : removeEnds(props.ep.summary)}
        </div>
        <div className='Episode-Extras-Box'>
            Extra: {!props.ep ? "Loading..." : props.ep.airstamp}
        </div>
        <img src={!props.ep ? "" : props.ep.image.medium} alt='Loading...'/>
      </div>
    );
  }
  
  export default EpisodeInformation;