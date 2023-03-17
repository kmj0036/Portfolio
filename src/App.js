
import { useRef,useState } from 'react';
import './App.css';
// import Blackalpha from './commonpage/Blackalpha';
import Mainpage from './components/mainpage/Mainpage';
import ScrollY from './components/ScrollY';
import Sidebar from './components/Sidebar';
import Topline from './Topline';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Lightning from './page/Lightning';
import Thenadlee from './page/Thenadlee';
import Nadleeexplain from './page/Nadleeexplain';
import Lightningex from './page/Lightningex';
import { GiDiceTarget } from "react-icons/gi";
import Introduce from './page/Introduce';


const initialState = {
  selectPort: "Main",
  portfolio:
  [
    {
      id:"Main",
      title:<GiDiceTarget/>,
      category:[
        {title:"summary",
        top:0},
        {title:"technology",
        top:500},
        {title:"meaning",
        top:1000},
        {title:"member",
        top:1500}],
        adress:"#",
      content: [<Introduce/>]
    },
    {
      id:"univershop",
      title: "univershop",
      category:[
        {title:"usecase",
        top:0},
        {title:"explain",
        top:500}],
      content: [<Lightning/>,<Lightningex/>],
      adress:"http://corona0113.dothome.co.kr/teamplay/index.php"
    },
    {
      id:"thenadlee",
      title: "thenadlee",
      category:[
        {title:"usecase",
        top:0},
        {title:"explain",
        top:500},
        {title:"URL",
        top:1000  }],
      content: [<Thenadlee/>,<Nadleeexplain/>],
      adress:"https://team-project-thenadlee.vercel.app/"
    },
  
]}

function App() {

const [appportfolio,setportfolio] = useState(initialState)
const { selectPort } = appportfolio
const { content,category,adress } = appportfolio.portfolio.find(port=> port.id === appportfolio.selectPort)
//category와 mainpage scroll 연결 
const moveto = useRef()
const [serverId, setServerId] = useState("main")
const handleTop = (num) => {
  moveto.current.scrollTo({
    top: num,
    behavior: "smooth"
  });
}
const clickY= (text)=>{
  // console.log(text)
}
// console.log(moveto.current)
// let categoryindex = (i)=>{
  // moveto.current.innerText[i]

// }

const serverClick= (serverid)=> {
  // console.log(serverid)
  setServerId(serverid) 
} 



  
  return (
    <BrowserRouter>
      <div className="App">
        {/* <Blackalpha onChangeSite={onChangeSite}/> */}
      <Sidebar serverClick={serverClick} appportfolio={appportfolio} setportfolio={setportfolio} />
      <Routes>
        <Route path='/' element={
          <>
          <ScrollY handleTop={handleTop}clickY={clickY} serverClick={serverClick} serverId={serverId}  portfolio={category}  adress={adress} setportfolio={setportfolio} appportfolio={appportfolio}/>
          <Mainpage moveto={moveto} clickY={clickY} selectPort={selectPort} portfolio={content} appportfolio={appportfolio}/>
          </>
        }>
        </Route>
      </Routes>
      <Topline/>
      </div>
    </BrowserRouter>
  );
}

export default App;
