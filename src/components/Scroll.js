import React from 'react';

const Scroll=(props)=>{

    return(
        <div style={{overflow:'scroll', border: '2px solid red', height:'600px', margin:'10px', padding:'10px'}}>
            {props.children}
        </div>
    )
}

export default Scroll;