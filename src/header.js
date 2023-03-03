//added card and button components
import picture from "./profile_picture.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function Header() {
  return (
    <div className="flex-container">
      <div>
        <img className="image" alt="profile" src={picture} />
      </div>
      <div className="textMid">
        <h1>Kat Mason</h1>
        <h2>Graduate Web Developer</h2>
      </div>
    </div>
  );
}

export default Header;
