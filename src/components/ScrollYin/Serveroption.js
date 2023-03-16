import React from 'react';
import './Serveroption.css'

const Serveroption = ({adress}) => {
    let serverAdcopy = ()=>{
        let con= adress
        console.log(adress)
        navigator.clipboard.writeText(con)
    }
    return (
        <div className='seroption'>
            <button address="example" onClick={serverAdcopy} style={{color:"skyblue"}}>서버(포트폴리오)주소 복사하기</button>
            {/* <button>서버(포트폴리오)이름변경하기</button>
            <button style={{color:"red"}}>서버(포트폴리오)삭제하기</button> */}
        </div>
    );
};

export default Serveroption;