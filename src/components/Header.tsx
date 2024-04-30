import image from "../assets/Icon.png"
import "./Header.css"
import { Outlet } from "react-router-dom";
const Header = () => {
  return (
    <>
      <div className="Header">
        <img width={70} src={image} alt="" />
        <p>University Three Duckling</p>
      </div>
      <Outlet />
    </>
  )
}

export default Header
