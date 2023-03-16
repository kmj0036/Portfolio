import React from 'react';
import Maincontents from './Maincontents';
import './Mainpage.css'

const Mainpage = ({moveto, clickY,portfolio}) => {
    return (
        <div className='mainback'>
            <div className='maintop'>
                
            </div>
            <Maincontents moveto={moveto} clickY={clickY} portfolio={portfolio}/>
        </div>
    );
};
export default Mainpage;