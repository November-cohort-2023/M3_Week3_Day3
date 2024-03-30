const profileImg = 'https://i.imgur.com/i1gsj0v.png';
 
function HomePage() {

  // useContext() hook is used to consume a hook

  return (
    <div className="HomePage">
      <h1>Hi! My Name is ...</h1>
      <img src={profileImg} className="profile" alt="profile" />
    </div>
  );
}
 
export default HomePage;
