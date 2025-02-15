
import './App.css';
import React,{useState} from "react";

function App() {

  const [weight,setWeight] = useState(0);
  const [height,setHeight] = useState(0);
  const [bmi, setBmi] = useState('');
  const [message, setMessage] = useState('');

  //logic
  
  let calcBmi = (e) =>
{
e.preventDefault();

  if(weight === 0 || height=== 0){
    alert('please enter a valid weight and height')
  }
else{
  let bmi = weight/(height*height);
  setBmi(bmi.toFixed(1))
  if(bmi < 18.5){
    setMessage('underweight')
  }
  else if(bmi >= 18.5 && bmi < 25){
    setMessage('normal')
  }
  else if(bmi >= 25 && bmi < 30){
    setMessage('Obesity')
  }
  else{
    setMessage('OverWeight')
  }
}

}

//reload

let reload = () =>{
  window.location.reload()
}



  return (
    <div className="App">
      <div className="container">
        <h2>BMI Calculator</h2>
        <form onSubmit={calcBmi}>
          <div>
            <label>weight (kg)</label>
            <input type="text" placeholder="Enter Weight Value" value={weight} 
            onChange={(e) => setWeight(e.target.value)} />
          </div>
          <div>
            <label>height (m)</label>
            <input type="text" placeholder="Enter Height Value" value={height} 
            onChange={(e) => setHeight(e.target.value)} />
          </div>
          <div>
            <button className="btn" type="submit">Submit</button>
            <button className="btn btn-outline" onClick={reload} type="submit">Reload</button>
          </div>
          <div className="center">
            <h3>Your BMI is:{bmi}</h3>
            <p>{message}</p>
          </div>


        </form>
      </div>
    </div>
  );
}

export default App;
