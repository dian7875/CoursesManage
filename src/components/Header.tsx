import image from "../assets/Icon.png"
import "./Header.css"
import { Outlet, useNavigate } from "react-router-dom";
const Header = () => {

 const navigate = useNavigate();

 const goHome = () => {
  navigate("/");
};
  return (
    <>
      <div className="Header">
        <img onClick={goHome} width={90} src={image} alt="" />
        <p style={{ cursor: 'default' }}>University Three Duckling</p>
      </div>
      <Outlet />
    </>
  )
}

export default Header
