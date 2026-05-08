import { NavLink } from "react-router"
import { FaBook } from "react-icons/fa"
import { FaClipboardCheck } from "react-icons/fa";
import { MdBookmarkAdd } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="navbar-cont">
        <div className="nav">
            <NavLink to={"/Library"} className={"nav-item"}><FaBook size={20}/> Library</NavLink>
            <NavLink to={"/Finished"} className={"nav-item"}><FaClipboardCheck size={23}/> Finished</NavLink>
            <NavLink to={"/Wishlist"} className={"nav-item"}><MdBookmarkAdd size={25}/> Wishlist</NavLink>
        </div>
    </div>
  )
}

export default Navbar