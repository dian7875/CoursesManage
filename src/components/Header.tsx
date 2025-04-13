import image from "../assets/Icon.png";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };
  return (
    <>
      <header className=" bg-[#374151] text-white flex justify-between items-center p-2">
        <div className="flex items-center">
          <img onClick={goHome} width={90} src={image} alt="" />
          <p style={{ cursor: "default" }}>University Three Duckling</p>
        </div>
      </header>
    </>
  );
};

export default Header;
