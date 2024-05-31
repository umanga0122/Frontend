
import './App.css'
import ButtonFactory from './component/button';
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
     <ButtonFactory type ="contact"/><br/>
     <ButtonFactory type ="dummy1"/><br/>
     <ButtonFactory type ="dummy2"/><br/>
     <ButtonFactory type ="dummy3"/><br/>


    </>
  );
}

export default App;
