import React from 'react';
import './Myaccount.css'
import { IoMdSettings } from "react-icons/io";

const Myaccount = () => {
    return (
        <div className='Myinfosec'>
            <div className='ininfosec'>
                <div className='profile'>
                    <div className ='usericon'></div>
                    <div className='username'>김민준</div>
                </div>
                <div className='setting'>
                    <IoMdSettings/>
                </div>
            </div>
        </div>
    );
};

export default Myaccount;