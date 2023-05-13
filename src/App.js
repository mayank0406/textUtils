
import { useState } from 'react';
import './App.css';
import Navbar from './componets/Navbar';
import Textform from './componets/Textfrom';
import Alert from './componets/Alert';
// import About from '../src/componets/About';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   useRouteMatch,
//   useParams
// } from "react-router-dom";


function App() {
  const [mode,setmode] =useState('light');
  const [alert,setAlert] = useState(null);

const ShowAlert = (message,type)=>{
       setAlert(
        {
          msg : message,
          type : type,
        }
       )
       setTimeout(() => {
        setAlert(null);
       }, 1500);
       
}
  const toggleMode = ()=>{
    if(mode==='light')
    {
      setmode('dark');
      document.body.style.backgroundColor="#144771";
      ShowAlert("Dark mode has been enabled", "success");
    }
    else{
      setmode('light');
      document.body.style.backgroundColor="white";
      ShowAlert("Light mode has been enabled", "success");

    }
  }
  return (
    <>
      <Navbar tittle="TextUtiles" about="My page" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      {/* <Switch> */}
          {/* <Route path="/about"> */}
            {/* <About /> */}
          {/* </Route> */}
          {/* <Route path="/"> */}
           <Textform ShowAlert={ShowAlert} heading="Enter text to Analyze" mode={mode}/>
          {/* </Route> */}
        {/* </Switch> */}
        {/* <Router/> */}
    </>
  );
}

export default App;




