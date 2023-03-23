import React from 'react';
import { FiPhone,FiUser,FiCalendar,FiMapPin,FiMail,FiLink } from 'react-icons/fi';
import './My.css'


const My = () => {
    return (
        <div id='My'>
            <div id='cont'>
                <h2>About me</h2>
                <ul id='tle'>
                    <li>
                        <FiUser/>
                        <p>이름<br/>김민준</p>
                    </li>
                    <li>
                        <FiCalendar/>
                        <p>생년월일<br/>1998.03.26</p>
                    </li>
                    <li>
                        <FiPhone/>
                        <a href='tel:010-8717-0036'>연락처<br/>010-8717-0036</a>
                    </li>
                    <li>
                        <FiMapPin/>
                        <p>거주지<br/>울산광역시.남구</p>
                    </li>
                    <li>
                        <FiMail/>
                        <a href="mailto:lia8774@naver.com">이메일<br/>lia8774@naver.com</a>
                    </li>
                    <li>
                        <FiLink/>
                        <p>오픈카톡<br/><a href='https://open.kakao.com/o/sJXDybbf'>LINK</a></p>
                        
                    </li>
                </ul>
            </div>
        </div>
    );
};


export default My;