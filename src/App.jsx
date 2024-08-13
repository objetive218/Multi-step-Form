import { useReducer } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import StepOne from './components/StepOne'
import StepTwo from './components/StepTwo'
import StepThree from './components/StepThree'
import StepFour from './components/StepFour'
import ThankYou from './components/ThankYou'

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
      case 'Thank':{
        return {
          selectStep: "ThankYou"
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
    <section className='principal_box'>
      <Navbar select={step.selectStep}/>
      {step.selectStep === "one"  && <StepOne handler={handleButtonNext}/> }
      {step.selectStep === "stepTwo" && <StepTwo handler={handleButtonNext}/> }
      {step.selectStep === "stepThree" && <StepThree handler={handleButtonNext}/> }
      {step.selectStep === "stepFour" && <StepFour handler={handleButtonNext}/>  }
      {step.selectStep === "ThankYou" && <ThankYou /> }
    </section>
    </>
  )
}

export default App
