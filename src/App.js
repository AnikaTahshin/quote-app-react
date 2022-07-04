import axios from "axios";
import { useState,useEffect} from "react";
import "./App.css";
function App() {
  let [quote, setQuote] = useState(null);
  useEffect(() => {
    getData();
  });
  async function getData(){
    let response = await axios.get("https://api.adviceslip.com/advice");
    console.log(response.data.slip.advice);
    let data = response.data.slip.advice;
    setQuote(quote = data);
  }
  return (
    <div className="app">
     <div className="card">
      <h3 className="heading">{quote}</h3>
      <button className="button" onClick={() => {getData()}}>Give me advice</button>
     </div>
    </div>
  );
}

export default App;
