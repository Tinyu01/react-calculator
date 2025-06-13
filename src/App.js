import {
  useState,
  useRef
} from "react"; 
import "./App.css";

function App() { 
  const inputRef = useRef(null); 
  const resultRef = useRef(null); 
  const [result, setResult] = useState(0); 
  const [operation, setOperation] = useState('');
 
  function plus(e) { 
    e.preventDefault(); 
    const inputValue = Number(inputRef.current.value);
    if (!isNaN(inputValue)) {
      setResult((result) => result + inputValue);
      setOperation('addition');
    }
  }; 
 
  function minus(e) { 
    e.preventDefault(); 
    const inputValue = Number(inputRef.current.value);
    if (!isNaN(inputValue)) {
      setResult((result) => result - inputValue);
      setOperation('subtraction');
    }
  };
 
  function times(e) { 
    e.preventDefault(); 
    const inputValue = Number(inputRef.current.value);
    if (!isNaN(inputValue)) {
      setResult((result) => result * inputValue);
      setOperation('multiplication');
    }
  }; 
 
  function divide(e) { 
    e.preventDefault(); 
    const inputValue = Number(inputRef.current.value);
    
    if (inputValue === 0) {
      alert('Error: Division by zero is not allowed!');
      return;
    }
    
    if (!isNaN(inputValue)) {
      setResult((result) => result / inputValue);
      setOperation('division');
    }
  };
 
  function resetInput(e) { 
    e.preventDefault();
    inputRef.current.value = '';
    inputRef.current.focus();
  }; 
 
  function resetResult(e) { 
    e.preventDefault();
    setResult(0);
    setOperation('');
  }; 

  function resetAll(e) {
    e.preventDefault();
    setResult(0);
    setOperation('');
    inputRef.current.value = '';
    inputRef.current.focus();
  }
 
  return ( 
    <div className="App"> 
      <div className="calculator-container">
        <div className="header">
          <h1>React Calculator</h1>
          <span className="subtitle">Modern • Functional • Beautiful</span>
        </div>
        
        <form className="calculator-form"> 
          <div className="result-display" ref={resultRef}> 
            <div className="result-value">{result}</div>
            {operation && (
              <div className="operation-indicator">
                Last operation: {operation}
              </div>
            )}
          </div> 
          
          <div className="input-section">
            <input
              pattern="[0-9]" 
              ref={inputRef} 
              type="number" 
              placeholder="Enter a number"
              className="number-input"
            /> 
          </div>

          <div className="buttons-grid">
            <div className="operation-buttons">
              <button onClick={plus} className="btn btn-primary" type="button">
                <span>+</span>
                Add
              </button>
              <button onClick={minus} className="btn btn-primary" type="button">
                <span>−</span>
                Subtract
              </button>
              <button onClick={times} className="btn btn-primary" type="button">
                <span>×</span>
                Multiply
              </button>
              <button onClick={divide} className="btn btn-primary" type="button">
                <span>÷</span>
                Divide
              </button>
            </div>
            
            <div className="control-buttons">
              <button onClick={resetInput} className="btn btn-secondary" type="button">
                Clear Input
              </button>
              <button onClick={resetResult} className="btn btn-secondary" type="button">
                Reset Result
              </button>
              <button onClick={resetAll} className="btn btn-danger" type="button">
                Reset All
              </button>
            </div>
          </div>
        </form>
        
        <div className="footer">
          <p>Built with React 18 • Modern CSS • 2025 Design</p>
        </div>
      </div>
    </div> 
  ); 
} 
 
export default App;