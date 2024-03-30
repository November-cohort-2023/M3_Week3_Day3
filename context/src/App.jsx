import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/Homepage";
import ProjectsPage from "./pages/ProjectsPage";

import { useContext } from "react";

import { ThemeContext } from "./context/theme.context";

 
function App() {

  const {theme} = useContext(ThemeContext)
  return (
    <div className={`App ${theme}`}>
      <Navbar />
 
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </div>
  );
}
 
export default App;
