import "./App.css";
import Counter from "./Components/Counter";
import ToggleSwitch from "./Components/ToggleSwitch";

function App() {

  return (
    <>
      <Counter start={4} minV={-50} maxV={50} plus={3} minus={7} />
      <Counter start={16} minV={-100} maxV={75} plus={10} minus={14} />
      <Counter start={-5} minV={-23} maxV={30} plus={9} minus={9} />

      <ToggleSwitch />
    </>
  );
}

export default App;
