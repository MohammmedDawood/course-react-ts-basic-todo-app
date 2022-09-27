import Todos from "./components/Todos";
import "./App.css";

function App() {
  return (
    <div>
      <Todos items={["Learn React", "learn TypeScript"]} />
    </div>
  );
}

export default App;
