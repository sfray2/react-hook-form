import './App.css';
import {Form} from "./components/Form";
import {useToggle} from "./useToggle";

function App() {

  const [isVisible, toggle] = useToggle(false);

  return (
    <div className="App">
      <button onClick={toggle}>
        {isVisible ? "Continue as Guest" : "Sign In"}
      </button>
      {isVisible && <Form />}
    </div>
  );
}

export default App;
