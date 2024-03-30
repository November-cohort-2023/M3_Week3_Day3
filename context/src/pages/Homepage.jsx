const profileImg = 'https://i.imgur.com/i1gsj0v.png';
 
import { useContext } from "react";

import { ThemeContext } from "../context/theme.context";
function HomePage() {

  const diogoObject = useContext(ThemeContext)
  // useContext() hook is used to consume a hook

  return (
    <div className="HomePage">
      {diogoObject.name}
      <h1>Hi! My Name is ...</h1>
      <img src={profileImg} className="profile" alt="profile" />
    </div>
  );
}
 
export default HomePage;
