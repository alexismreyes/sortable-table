import { Outlet } from "react-router-dom";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import "./assets/App.css"

//Main component to render the application
function App() {
  return (
    <>
      <Menu />      
        <Outlet />      
      <Footer />
    </>
  );
}

export default App;
