import logo from "./logo.svg";
import "./App.css";
import Chart from "./components/ChartComponet";
import { Type1, Type2, Type3 } from "./components/DataGridComponent";
import { Adfilter, Mdfilter } from "./components/filter";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Chart></Chart>
        <div>Type1</div>
        <Type1></Type1>
        <div>Type2</div>
        <Type2></Type2>
        <div>Type3</div>
        <Type3></Type3>
        <Adfilter></Adfilter>
        <Mdfilter></Mdfilter>
      </header>
    </div>
  );
}

export default App;
