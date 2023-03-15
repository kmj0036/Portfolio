import React, {  useState } from 'react';
import './Leftcontainer.css'
import Serveroption from './Serveroption';


const Leftcontainer = ({handleTop,clickY,serverClick,serverId,setportfolio,portfolio}) => {
    //servername 토글형으로 만들기
    const[servername,setServername]=useState(false);
    const onClick2= (e)=>{
        setServername(!servername);
    }   
    console.log({portfolio})
    return (
        <>
        <div className='LeftcotainerStyle'>
            <div className='titlebar' onClick={onClick2}>
                <div>{serverId}</div>
                <div className={servername ? null  : 'roratearrow'} >▼</div>
            </div>
            {/* left컨테이너 하위부분 */}
            <div className='bottom'>
                {servername ? <Serveroption/>:null}
                {/* <ul className='movecate'> */}
                <ul className='movecate'>
                    {portfolio.map((port,index)=>
                    <li key={index} id={port.title} onClick={()=>handleTop(port.top)} className='radius' 
                    >{port.title}</li>
                    )}
                </ul>
            </div>
            {/* 서버내의 카테고리를 불러오고 해당 카테고리를 누르면
            해당 카테고리의 위치까지 내려간다. */}
        </div>
        </>
    );
};

export default Leftcontainer;