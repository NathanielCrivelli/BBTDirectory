import React, { useState } from 'react';

function EpisodeList(props) {
  const onClick = (episode) => {
    props.onChange(episode)
  }
  return (
      <div className='Episode-List' id='Episode-List'>
        {
          props.list.map((episode, idx) => {
            return (
              <button type="button" className='episode-button' key={'episode'+idx} onClick={onClick(idx)}>
                <h4> {!props.list ? "Loading..." : props.list[idx].name} </h4>
              </button>
            )
          })
        }
      </div>
    );
  }
  
  export default EpisodeList;
  