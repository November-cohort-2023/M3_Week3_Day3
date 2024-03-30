import { NavLink } from "react-router-dom";

import { useContext } from "react";

import { ThemeContext } from "../context/theme.context";
 
function Navbar() {


  const {theme,setTheme,name,changeTheme} = useContext(ThemeContext)


  return (
    <nav className={"Navbar " + theme}>
      <div>
        <button onClick={changeTheme}>CHANGE THEME</button>
        {name}
        <NavLink to="/"> Home </NavLink>
        <NavLink to="/projects"> Projects </NavLink>
      </div>
    </nav>
  );
}

/* 

Exercise: 1

1. in our theme context add 1 more key value pair

2. myName : "Your name"

*/
 
export default Navbar;
