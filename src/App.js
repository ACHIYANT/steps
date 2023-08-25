import { useState } from "react";
const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  return (
    <div>
      <Steps />
    </div>
  );
}

function Steps() {
  //Static step variable
  // let step = 1 ;

  //Using peice of state .
  //Step - 1 to add a new state variable.

  let [step, setStep] = useState(1);

  let [isOpen, setIsOpen] = useState(true);

  //Test state
  // let [test,setTest] = useState({name:'Jonas'});

  // console.log(window.step,' hiii ',setStep);

  function handlePrevious() {
    if (step > 1)
      // Step - 3
      // Read and update the peice of state in event handler.
      // setStep(step - 1);

      setStep((step) => step - 1);

    //We can't update state variable manually.
    // step =step-1;
  }
  function handleNext() {
    //Updating state variable using the call back function inside setter function.
    if (step < 3) setStep((step) => step + 1);

    //We can update the state variable directly without using call back function inside the setter function but good practice is to update the state variable using the call back function inside the setter function.
    // if (step<3) setStep(step+1);

    //Updating object state variable manually works but it is a BAD PRACTICE. So, always use the setter function.
    // test.name = 'Fred';
    // setTest({name : 'Achiyant'});
  }

  function handleClose() {
    // if(isOpen === true)
    // setIsOpen(false);
    // else
    // setIsOpen(true);

    // setIsOpen(!isOpen);

    setIsOpen((isOpen) => !isOpen);
  }
  return (
    <>
      {/* Conditional rendering to close or open the steps UI if isOpen is true then b/c of && it return the seond part is isOpen is false then b/c of && it returns the left part or false so nothing can be displayed */}
      <button className="close" onClick={handleClose}>
        {isOpen === true ? <span>&times;</span> : "👁"}
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className="active">1</div>
            {/* Step - 2  */}
            {/* Using state variable in code / JSX */}
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={`${step >= 3 ? "active" : ""}`}>3</div>
          </div>

          {/* <p className="message">{messages[0]}</p> */}

          {/* Normal way to render steps message without children prop */}
          {/* <p className="message">
            Step {step} : {messages[step - 1]}
          </p> */}
          {/* Using children prop to render the step message */}
          <StepMessage>
            <p className="message">
              Step {step} : {messages[step - 1]}
            </p>
          </StepMessage>

          <div className="buttons">
            {/* <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handlePrevious}
            >
              Previous
            </button> */}
            {/* <Button bgColor={'#7950f2'} color={'#fff'} text={'Previous'} onClick={handlePrevious} emoji={'👈'}/> */}

            <Button bgColor={"#7950f2"} color={"#fff"} onClick={handlePrevious}>
              <span>👈</span>Previous
            </Button>

            <Button
              bgColor={"#7950f2"}
              color={"#fff"}
              text={"Next"}
              onClick={handleNext}
              emoji={"👉"}
            >
              Next 👉
            </Button>
            {/* <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handleNext}
            >
              Next
            </button> */}
          </div>
        </div>
      )}
    </>
  );
}
function StepMessage({ children }) {
  return (
    <p className="message">
      {children}
      {/* {test.name} */}
    </p>
  );
}
// function Button({bgColor,color,onClick,text,emoji,children}){
function Button({ bgColor, color, onClick, children }) {
  // return <button style={{backgroundColor:bgColor,color:color}} onClick={onClick}><span>{emoji}</span>{text}</button>
  // return <button style={{backgroundColor:bgColor,color:color}} onClick={onClick}>{emoji}{text}</button>
  return (
    <button
      style={{ backgroundColor: bgColor, color: color }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
export default App;
