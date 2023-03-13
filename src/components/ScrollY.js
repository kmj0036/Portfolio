import React from 'react';
import './ScrollY.css'
import Leftcontainer from './ScrollYin/Leftcontainer';
import Myaccount from './ScrollYin/Myaccount';

const ScrollY = ({handleTop,clickY,serverClick, serverId}) => {
    return (
        <div className='background'>
            <Leftcontainer handleTop={handleTop} clickY={clickY} serverClick={serverClick} serverId={serverId}/>
            <Myaccount/>
        </div>
    );
};

export default ScrollY;