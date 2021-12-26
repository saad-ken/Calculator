/* eslint-disable no-eval */
/* eslint-disable default-case */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import Keys from "./components/Keys";
import OutputScreen from "./components/OutputScreen";
import './styles/styles.css'

function App() {

  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')

  
  const handelclick = eve =>{
    
    const value = eve.target.value
    setQuestion( question + value)

  }

  
  const Equal =()=>{
    
    try {
      var ans = setAnswer(eval(question).toString())
      setQuestion('')
    }
    catch(err){
      setQuestion('')
      setAnswer("Syntax Error")
    }
   
  } 
   
  const cases = eve =>{
    const value = eve.target.value
    
    switch(value){
      case 'AC':{
        setQuestion('')
        setAnswer('')
        break
      }
      case '<-':{
        setQuestion(question.substring(0,question.length-1))
      }
    }
  }
  

   
  
  return (
    <div className="calculator__body">
        <div className="calculator__result">
          <OutputScreen ans = {answer} ques = {question}/>
        </div>
            
            <Keys lable={'AC'}  click = {cases}/>
            <Keys lable={'<-'} click = {cases}/>

            <Keys lable={'7'} click = {handelclick}/>
            <Keys lable={'8'} click = {handelclick}/>
            <Keys lable={'9'} click = {handelclick}/>
            <Keys lable={'/'} click = {handelclick}/>
       
            <Keys lable={'4'} click = {handelclick}/>
            <Keys lable={'5'} click = {handelclick}/>
            <Keys lable={'6'} click = {handelclick}/>
            <Keys lable={'*'} click = {handelclick}/>
         
            <Keys lable={'1'} click = {handelclick}/>
            <Keys lable={'2'} click = {handelclick}/>
            <Keys lable={'3'} click = {handelclick}/>
           
            <Keys lable={'-'} click = {handelclick}/>
            <Keys lable={'.'} click = {handelclick}/>
            <Keys lable={'0'} click = {handelclick}/>
        
          
            <Keys lable={'+'} click = {handelclick}/>
            <Keys lable={'='} click={Equal}/>
        
  
    </div>
    
   
  );
}

export default App;
