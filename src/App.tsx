import React, {useState} from 'react';
import InputComponent from "./components/input.component";
import LinkResult from "./components/results.component";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState<string>("");
  return (
    <div className="App">
      <header className="App-header">
        <InputComponent setInputValue={setInputValue}/>
        <LinkResult inputValue={inputValue} />
        <ToastContainer />
      </header>
    </div>
  );
}

export default App;
