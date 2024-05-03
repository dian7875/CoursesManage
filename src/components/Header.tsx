//import image from "../assets/Icon.png"
import image from "../assets/PYh.gif"
import "./Header.css"
import { Outlet } from "react-router-dom";
const Header = () => {
  return (
    <>
      <div className="Header">
        <img width={90} src={image} alt="" />
        <p style={{ cursor: 'default' }}>University Three Duckling</p>
      </div>
      <Outlet />
    </>
  )
}

export default Header
