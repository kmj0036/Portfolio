import React, {  useState } from 'react';
import './Leftcontainer.css'
import Serveroption from './Serveroption';


const Leftcontainer = ({handleTop,clickY,serverClick,serverId}) => {
    //servername 토글형으로 만들기
    const[servername,setServername]=useState(false);
    const onClick2= (e)=>{
        setServername(!servername);
    }
   

    
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
                <ul className='movecate'>
                    <li id="index" className='sec' onClick={()=>handleTop(0)}>Category1</li>
                    <li id='begin' className='sec' onClick={()=>handleTop(150)}>Category2</li>
                    <li id='highlight' className='sec' onClick={()=>handleTop(300)}>Category3</li>
                    <li id='savage' className='sec' onClick={()=>handleTop(400)}>Category4</li>
                    <li id='ending' className='sec'>Category5</li>
                </ul>
                
    
                
            </div>
            {/* 서버내의 카테고리를 불러오고 해당 카테고리를 누르면
            해당 카테고리의 위치까지 내려간다. */}
        </div>
        </>
    );
};

export default Leftcontainer;