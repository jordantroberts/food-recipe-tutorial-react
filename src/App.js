import React from "react";
import logo from "./logo.svg";
import "./App.css";


const App = () => {

  const APP_ID = (process.env.REACT_APP_APP_ID)
  const APP_KEY = (process.env.REACT_APP_APP_KEY); 
  
  const exampleReq = "https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}" // from Edamam documentation
 
  return(
    
    <div className="App">
    <h1>Hello React</h1>
    </div>
    
  )
}

export default App;
