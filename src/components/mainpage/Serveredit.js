import React, { useState } from 'react';
import './Serveredit.css'

const Serveredit = ({onChangeSite}) => {
    const [servername,SetServername] = useState("")
    const onChange=(e)=>{
        const newsername =e.target.value;
        SetServername(newsername)
    }
    const onSubmit = (e) => {
        e.preventDefault(); 
        onChangeSite(servername);
    }
    return (
        <div className='editsername'>
            <form onSubmit={onSubmit}>
                <div>
                    <input name='servername' onChange={onChange} placeholder='변경할 서버이름'/>
                    <button type='submit'>전송</button>
                </div>
            </form>
        </div>
    );
};

export default Serveredit;<form>
<input/>
</form>