import './App.css';
import { useState } from 'react';
import FunctionalComponent from './Components/FunctionalComponent';
import ClassComponent from './Components/ClassComponent';

function App() {
  // let codeMore = false;
  let [codeMore1,setCodeMore1] = useState(false);
  let [codeMore2,setCodeMore2] = useState(false);
  const funcComp = ()=>{
// codeMore ? setCodeMore(false) :setCodeMore(true);

        setCodeMore1(!codeMore1);
      
        return codeMore1;
  }

  const classComp = ()=>{
    // codeMore ? setCodeMore(false) :setCodeMore(true);
    setCodeMore2(!codeMore2);
    <ClassComponent data = {codeMore2} />
    return codeMore2;
      }

  return (
    <div className="App">
      <div className='heading'>Styling using Functional and Class Component</div>
      <div className='twoColumns'>
        <div className='column1'>
        <button onClick={funcComp}>To see styling in functional component</button>
        {codeMore1 &&   <FunctionalComponent />}
        </div>
        <div className='column1'> 
          <button onClick={classComp}>To see styling in class component</button>
        

        {codeMore2 &&   <ClassComponent />}
        </div>
       
      </div>
    </div>
  );
}

export default App;
