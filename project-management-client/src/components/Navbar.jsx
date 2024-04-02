import { Link } from "react-router-dom";

import { useContext } from "react";

import { AuthContext } from "../context/auth.context";

function Navbar() {

  const {user, isLoggedIn} = useContext(AuthContext)
  return (
    <nav>
      {isLoggedIn && user.name}
      <Link to="/">
        <button>Home</button>
      </Link>

      <Link to="/projects">
        <button>Projects</button>
      </Link>
      <Link to="/signup">
        <button>Signup</button>
      </Link>
    </nav>
  );
}

export default Navbar;
