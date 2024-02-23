import React from 'react';

function EpisodeList(props) {
  return (
      <div className='Episode-List' id='Episode-List'>
        {
          props.list.map((episode, idx) => {
            return (
              <button type="button" className='episode-button' key={'episode'+idx} onClick={() => { props.onChange(idx) }}>
                <h4> {!props.list ? "Loading..." : props.list[idx].name} </h4>
              </button>
            )
          })
        }
      </div>
    );
  }
  
  export default EpisodeList;
  