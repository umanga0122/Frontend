import { ReactSVG } from "react-svg";
import './App.css'
import ButtonFactory from './component/button';
import Home from "./assets/icons/home.svg";
function App() {

  return (
    <>
     <ButtonFactory />
     <ButtonFactory type ="submit"/> <br/>
     <ButtonFactory type ="download"/><br/>
     <ButtonFactory type ="export"/><br/>
     <ButtonFactory type ="cancel"/><br/>
     <ButtonFactory type ="search"/><br/>
     <ButtonFactory type ="install"/><br/>
     <ButtonFactory type ="upload"/><br/>
     <ButtonFactory type ="dummy1"/><br/>
     <ButtonFactory type ="dummy2"/><br/>
     <ButtonFactory type ="dummy3"/><br/>

    <img src={Home} alt="React Logo"/>

    </>
  );
}

export default App;
