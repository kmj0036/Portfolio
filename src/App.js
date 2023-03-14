
import { useRef,useState } from 'react';
import './App.css';
// import Blackalpha from './commonpage/Blackalpha';
import Mainpage from './components/mainpage/Mainpage';
import ScrollY from './components/ScrollY';
import Sidebar from './components/Sidebar';
import Topline from './Topline';
import {BrowserRouter,Route,Routes} from 'react-router-dom'

const initialState = {
  selectPort: "snowman",
  portfolio:
  [
  {
    id:"lightningshop",
    title: "lightningshop",
    content: ["","","",""]
  },
  {
    id:"totheedge",
    title: "totheedge",
    content: ["2_포폴내용1","2_포폴내용2","2_포폴내용3"]
  },
  {
    id:3,
    title: "세번째포폴",
    content: ["3_포폴내용1","3_포폴내용2","3_포폴내용3","3_포폴내용4"]
  },
  {
    id:4,
    title: "네번째포폴",
    content: ["4_포폴내용1","4_포폴내용2","4_포폴내용3","4_포폴내용4"]
  }
]}

function App() {

const [appportfolio,setportfolio] = useState(initialState)
const { selectPort } = appportfolio
const { content } = appportfolio.portfolio.find(port=> port.id === appportfolio.selectPort)
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
  console.log(text)
}
// console.log(moveto.current)
// let categoryindex = (i)=>{
  // moveto.current.innerText[i]

// }

const serverClick= (serverid)=> {
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
          <ScrollY handleTop={handleTop}clickY={clickY} serverClick={serverClick} serverId={serverId}  portfolio={content} setportfolio={setportfolio} appportfolio={appportfolio}/>
          <Mainpage moveto={moveto} clickY={clickY} selectPort={selectPort} portfolio={content} appportfolio={appportfolio}/></>
        }>
        </Route>
      </Routes>
      <Topline/>
      </div>
    </BrowserRouter>
  );
}

export default App;
