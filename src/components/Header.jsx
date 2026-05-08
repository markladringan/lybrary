import Logo from "../assets/img/Lybrary.png"
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  return (
    <div className="header-cont">
        <div className="logo">
            <img src={Logo} alt="" />
        </div>
        <div className="user">
            <div className="username">
                <p>User</p>
            </div>
            <div className="usericon">
                <FaUserCircle size={30}/>
            </div>
        </div>
    </div>
  )
}

export default Header