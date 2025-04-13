import reactLogo from "../images/react.svg";
import "../css/Pictures.css";
function Pictures() {
  return (
    <div className="img-sec">
      <img src={reactLogo} alt="react pic" className="img" />
      <img src="/images/menu-icon.png" alt="menu pic" className="img" />
    </div>
  );
}

export default Pictures;
