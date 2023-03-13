import React from 'react';
import './Sidebar.css'
import { GiDiceTarget } from "react-icons/gi";

const Sidebar = ({serverClick,appportfolio,setportfolio}) => {
    const serid = (e) => {
        const serverid = e.target.id;
        serverClick(serverid)
       }
    const {selectPort,portfolio} = appportfolio
    const onClick = (num) => {
        setportfolio({
            ...appportfolio,
            selectPort:num
        })
    }

    return (
        <div className='sidebar'>
            <div className='mainicon'>
                <div className='server'>
                    <div className='sv_back top16'  id='main' onClick={serid}>
                        <div className='radius' id='main' onClick={serid}>
                            <GiDiceTarget id='main' onClick={serid}/>
                        </div>
                    </div>
                </div>                    
            </div>
            {/* 구분선 */}
            {/* <ul className='listmenu'>
                {portfolio.map(port=>
                <li key={port.id} onClick={()=>onClick(port.id)} className='radius' onClick={serid}>
                >{port.title}</li>
                )}
            </ul> */}
            <div className='bottomline'/>
            <div className='serverlist'>
                <div className='server'>
                    <div className='sv_back'>
                        <div className='radius' id='snowman' onClick={serid}>
                            servername
                        </div>
                    </div>
                </div>
                <div className='server'>
                    <div className='sv_back'>
                        <div className='radius' id='totheedge' onClick={serid}>
                            ser
                        </div>
                    </div>
                </div>
            </div> 
            {/* 구분선 */}
        </div> 
    );
};

export default Sidebar;