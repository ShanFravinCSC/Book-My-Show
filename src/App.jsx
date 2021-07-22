//import { Route } from "react-router-dom";

//Hoc
import DefaultHOC from "./HOC/Default.HOC";

//component
import Temp from "./components/temp";

function App() {
  return (
    <div>
    <DefaultHOC path="/" exact component={Temp}/>
    </div>
    
  );
}
export default App;