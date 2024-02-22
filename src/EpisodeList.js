import React, { useEffect } from 'react';

function EpisodeList(props) {
    useEffect(() => {
      var elem = document.getElementById('Episode-List');
      elem.scrollTop = elem.scrollHeight;
    }, [props.list])
    return (
      <div className='Episode-List' id='Episode-List'>
        {
          props.list.map((episode, idx) => {
            
          })
        }
      </div>
    );
  }
  
  export default EpisodeList;
  