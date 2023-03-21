import React from 'react';
import './Archive.css'
import {SiNotion,SiGithub} from "react-icons/si"

const Archive = () => {
    return (
        <div id='Arc'>
            <h2>Archive</h2>
            <div id='innersection'>
                <div id='mess'>
                    <div id='cen'>
                        <SiGithub id='git'/>
                        <h3>Github</h3>
                    </div>
                    <div id='ca'>
                        <a href='https://github.com/kmj0036'>https://github.com/kmj0036</a>
                        <h4 id='inp'>My archive</h4>
                        <ul>
                            <li>과거 진행한 프로젝트의 소스코드</li>
                            <li>연습용 프로젝트,실험용 프로젝트 소스코드</li>
                        </ul>    
                    </div>
                </div>
                <div id='mess'>
                    <div id='cen'>
                        <SiNotion id='notion'/>
                        <h3>Notion</h3>
                    </div>
                    <div id='ca'>
                        <a href='https://www.notion.so/5efde0067c00464b8c6637cab18ad358?v=2b9add84af2b408586035862d1362607'>Notion Link</a>
                        <ul>
                            <li>수업,프로젝트에 사용했던 APi,라이브러리 정리</li>
                            <li id='red'>(현재 요금제 만료로 인하여 접근불가)-본인만 접근가능</li>
                        </ul>  
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Archive;