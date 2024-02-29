import { useState } from 'react'
import './App.css'
import Input from './component/Input'
import { FaCheckCircle} from "react-icons/fa";
function App() {
  
  const[value,setValue]=useState("");
  const[item,setItem]=useState([]);

  const InputChange=e=>{
    setValue(e.target.value)
    
  }
  
  const onBtnClick=()=>{
    setItem([...item,value])
    setValue('')
    
  }
  const onInputEnter=(e)=>{
   
      if(e.key == "Enter"){
        setItem([...item,value])
        setValue('')
      }
    
  }
  return (
    <>
    <div className='head'>
      <h1 className='text'>To Do List...</h1>
    </div>
    <div className="main">
    <Input  onChange={InputChange} type="text"   placeholder="To do list.."  value={value} onkeyDown={onInputEnter} />
    <button className="btn" onClick={onBtnClick} >Enter </button>
    </div>
    <div className="list">
    <ul>
      {
      item.map(elt=>{
      return <li className='text1'><i className='icon'><FaCheckCircle /></i>{elt}</li>
       } )
      }
    </ul>
    </div>
    </>

    )
      
}

export default App
