import { useReducer } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import StepOne from './components/StepOne'
import StepTwo from './components/StepTwo'
import StepThree from './components/StepThree'

function App() {
 
  function stepReducer(state, action) {
    switch(action.type){
      case 'one':{
        return {
          selectStep: "one"
        }
      }
      case 'two':{
        return {
          selectStep: "stepTwo"
        }
      }
      case 'three':{
        return {
          selectStep: "stepThree"
        }
      }
      case 'four':{
        return {
          selectStep: "stepFour"
        }
      }
    }
  }

  function handleButtonNext(text){
      dispatch({type: text})
    }


  const [step, dispatch] = useReducer(stepReducer, {selectStep : "one"})
  return (
    <>
    <section>
      <Navbar/>
      {step.selectStep === "one"  ? <StepOne handler={handleButtonNext}/> : <h1>one</h1>}
      {step.selectStep === "stepTwo" ? <StepTwo handler={handleButtonNext}/> : ""}
      {step.selectStep === "stepThree" ? <StepThree handler={handleButtonNext}/> : ""}
    </section>
    </>
  )
}

export default App
