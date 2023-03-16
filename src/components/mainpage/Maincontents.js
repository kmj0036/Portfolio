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
                    {portfolio.map((port,index)=>port)}
        </div>
    );
};

export default Maincontents;