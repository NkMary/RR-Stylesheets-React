import "./App.css";
import ComponentOne from "./components/ComponentOne";
import Jaden from "./components/Jaden";
import Beats from "./components/Beats.js";

const JadenStyles = {
  backgroundColor: "yellow",
  padding: "50px",
  margin: "50px",
  fontSize: "50px",
};

function App() {
  return (
    <div className="App">
      <Beats />
      <ComponentOne />
      <Jaden JadenStyles={JadenStyles}/>
    </div>
  );
}

export default App;
