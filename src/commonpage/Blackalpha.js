 import React from 'react';
import Serveredit from '../components/mainpage/Serveredit';
 import './Blackalpha.css'

const Blackalpha = ({onChangeSite}) => {
    return (
        <div className='blackalpha'>
            <Serveredit onChangeSite={onChangeSite}/>
        </div>
    );
};

export default Blackalpha;