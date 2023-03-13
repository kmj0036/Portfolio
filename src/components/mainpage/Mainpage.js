import React from 'react';
import Maincontents from './Maincontents';
import './Mainpage.css'

const Mainpage = ({moveto, clickY}) => {
    return (
        <div className='mainback'>
            <div className='maintop'>
                {"catename"}
            </div>
            <Maincontents moveto={moveto} clickY={clickY} server/>
        </div>
    );
};
export default Mainpage;