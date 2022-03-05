import { useState } from 'react';
import './App.css';
import Display from './Components/Input';
import Keypad from './Components/Keypad';

function App() {
  const InitailValue = 0
  const [result, setResult] = useState(InitailValue)
  
  const handleKey = e => {
    if (e.target.name === "AC"){
      setResult(InitailValue)
    }else if (e.target.name === "C"){
      if (result.length > 1){
        setResult(prev => {
        return(prev.substring(0, prev.length - 1))
      })
    }else{
      setResult(InitailValue)
    }
    }else{
      setResult(prev=>{
        if(prev == "0"){
          return(e.target.name)
        }else{
          return( (prev) + (e.target.name) ) 
        }
      })
    }
  }
  
  const handleOperation = e => {
    setResult(eval(result))
  }
  
  return (
    <div className="App">
      <Display result={result} />
      <Keypad 
      handleKey={handleKey} 
      handleOperation={handleOperation}  />
    </div>
  );
}

export default App;
