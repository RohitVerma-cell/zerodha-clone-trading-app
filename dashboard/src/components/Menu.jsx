import React, {useState} from "react";
import { Link } from "react-router-dom";

const Menu = () => {

  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfiledropdownOpen, setIsProfiledropdownOpen] = useState(false);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  // const handleProfileClick = () => {
  //   setIsProfiledropdownOpen(!isProfiledropdownOpen);
  // };

  const handleProfileClick = () => {
    window.location.href = "http://localhost:5173/login";
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link to="/" className={selectedMenu === 0 ? activeMenuClass : menuClass} onClick={() => handleMenuClick(0)} style={{textDecoration:"none"}}>
            <p>Dashboard</p>
            </Link>
          </li>
          <li>
            <Link to="/orders" className={selectedMenu === 1 ? activeMenuClass : menuClass} onClick={() => handleMenuClick(1)} style={{textDecoration:"none"}}>
            <p>Orders</p>
            </Link>
          </li>
          <li>
            <Link to="/holdings" className={selectedMenu === 2 ? activeMenuClass : menuClass} onClick={() => handleMenuClick(2)} style={{textDecoration:"none"}}>
            <p>Holdings</p>
            </Link>
          </li>
          <li>
             <Link to="/positions" className={selectedMenu === 3 ? activeMenuClass : menuClass} onClick={() => handleMenuClick(3)} style={{textDecoration:"none"}}>
            <p>Position</p>
            </Link>
          </li>
          <li>
             <Link to="/funds" className={selectedMenu === 4 ? activeMenuClass : menuClass} onClick={() => handleMenuClick(4)} style={{textDecoration:"none"}}>
            <p>Funds</p>
            </Link>
          </li>
          <li>
              <Link to="/apps" className={selectedMenu === 5 ? activeMenuClass : menuClass} onClick={() => handleMenuClick(5)} style={{textDecoration:"none"}}>
            <p>Apps</p>
            </Link>
          </li>
        </ul>
        <hr />
        <div className="profile" onClick={handleProfileClick}>
          <div className="avatar">ZU</div>
          <p className="username">Log Out</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;