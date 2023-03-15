import React from 'react';
import './Maincontents.css'

const Maincontents = ({moveto, clickY,portfolio}) => {

    // const userheight = e.target.clientHeight; 
    const onClick = (e) => {
       const text = moveto;
       clickY(text)
    }
    
    return (
        <div className='mainbottom' ref={moveto}  onClick={onClick}>
                {portfolio.map((port,index)=>
                <div id={port} className={`ex cate${index+1}`}  
                >{port}</div>
                )}
        </div>
    );
};

export default Maincontents;