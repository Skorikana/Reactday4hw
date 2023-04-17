import "./index.css";
//Import route and our components
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Details from "./pages/Details";
import Nav from "./components/nav";
import Dashboard from "./pages/Dashboard";
export default function App () {
  // We will use the Route component to specify each route
  return (
    <div className="App">
    
      <Nav/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/Dashboard" element={<Dashboard/>}/> 
      <Route path="/stocks/:symbol" element={<Details/>}/>  
    </Routes>
    </div>
  );
}