import { useReducer } from 'react';
import './style.css';

function Usereducer() {
  const initial = 0;
  const reducer = (state, action) => {
    switch (action) {
      case "add": return state + 1;
      case "sub": return state - 1;
      case "reset": return 0;
      default: return 0;
    }
  }
  const [value, dispatch] = useReducer(reducer, initial)
  return (
    <div className="App">
     <h1>What is UseReducer Hook ?(Implementation)</h1>
      <h2>{value}</h2>
     

      <button type="button" class="btn-black" onClick={() => dispatch("add")}>Add</button> &nbsp;
      <button type="button" class="btn-black" onClick={() => dispatch("sub")}>subtract</button>&nbsp; &nbsp;
      <button type="button" class="btn-black" onClick={() => dispatch("reset")}>reset</button>
    </div>
  );
}
export default Usereducer;