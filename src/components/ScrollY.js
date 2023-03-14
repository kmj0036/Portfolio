import React from 'react';
import './ScrollY.css'
import Leftcontainer from './ScrollYin/Leftcontainer';
import Myaccount from './ScrollYin/Myaccount';

const ScrollY = ({handleTop,clickY,serverClick, serverId,portfolio,setportfolio}) => {
    return (
        <div className='background'>
            <Leftcontainer handleTop={handleTop} clickY={clickY} serverClick={serverClick} serverId={serverId} portfolio={portfolio} setportfolio={setportfolio} />
            <Myaccount/>
        </div>
    );
};

export default ScrollY;