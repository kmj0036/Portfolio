import React from 'react';
import './Maincontents.css'

const Maincontents = ({moveto, clickY}) => {

    // const userheight = e.target.clientHeight; 
    const onClick = (e) => {
       const text = moveto;
       clickY(text)
       
       console.log()
    }
    
    return (
        <div className='mainbottom' ref={moveto}  onClick={onClick}>
            <div id="index"className='ex cate1'>index</div>
            <div id="begin"className='ex cate2'>begin</div>
            <div id="highlight"className='ex cate3'>highlight</div>
            <div id="savage"className='ex cate4'>savage</div>
            <div id="ending"className='ex cate5'>ending</div>
             
        </div>
    );
};

export default Maincontents;