import image from "../assets/Icon.png"
import cat from "./PYh.gif"
import "./Header.css"
import { Outlet } from "react-router-dom";
const Header = () => {
  return (
    <>
      <div className="Header">
        <img width={90} src={cat} alt="" />
        <p style={{ cursor: 'default' }}>University Three Duckling</p>
      </div>
      <Outlet />
    </>
  )
}

export default Header
