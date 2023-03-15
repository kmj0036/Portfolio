import React from 'react';
import './Sidebar.css'
import { GiDiceTarget } from "react-icons/gi";

const Sidebar = ({serverClick,appportfolio,setportfolio,}) => {
    const serid = (e) => {
        const serverid = e.target.id;
        serverClick(serverid)
       }
    const {selectPort,portfolio} = appportfolio
    const onClick = (portid) => {
        setportfolio({
            ...appportfolio,
            selectPort:portid
        })
        const serverid = portid;
        serverClick(serverid)
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
            
            <div className='bottomline'/>
            <div className='serverlist'>
                <div>
                    <div>
                        <ul className='listmenu'>
                            {portfolio.map(port=>
                            <li key={port.id} id={port.id} onClick={()=>onClick(port.id)} className='radius' 
                            style={selectPort===port.id ? {background:" rgb(88, 101, 242)" ,borderRadius: "20%"} : null }>{port.title}  </li>
                            )}
                        </ul>
                    </div>
                </div>
            </div> 
            {/* 구분선 */}
        </div> 
    );
};

export default Sidebar;