import "./App.css";
import Button from "./Components/Button";
import { useCounter } from "./Hooks/useCounter";

function App() {
  const [x, incrementX, decrementX, reset, max, min, evenOdd, type, plus3, min2] = useCounter() as any;

  return (
    <>
      <div className="center">
        <h1>HOOKS</h1>
        <p>{x}</p>
        <div className="btn">
          <Button handleClick={incrementX} test={"+"} />
          <Button handleClick={decrementX} test={"-"} />
          <Button handleClick={reset} test={"Reset"} />
          <Button handleClick={max} test={"Max"} />
          <Button handleClick={min} test={"Min"} />
          <Button handleClick={evenOdd} test={"Odd / Even"} />
          <Button handleClick={plus3} test={"+3"} />
          <Button handleClick={min2} test={"-2"} />

        </div>
        <p>{type}</p>
      </div>
    </>
  );
}

export default App;
