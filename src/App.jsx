//import { Route } from "react-router-dom";

//Hoc
import DefaultHOC from "./HOC/Default.HOC";

//pages
import HomePage from "./pages/Home.page";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div>
    <DefaultHOC path="/" exact component={HomePage}/>
    </div>
    
  );
}
export default App;