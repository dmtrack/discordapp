import { TbBrandDiscord } from "react-icons/tb";
import {
  FaSteamSquare,
  FaRedditSquare,
  FaGithubSquare,
  FaSnapchatSquare,
  FaBehanceSquare,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdOutlineRemove } from "react-icons/md";

function Sidebar({ children }) {
  const mainLogo = {
    path: "/direct",
    name: "",
    icon: <TbBrandDiscord size={30} />,
  };
  const menuItem = [
    {
      path: "/Server1",
      name: "",
      icon: <FaSteamSquare size={35} />,
    },
    {
      path: "/Server2",
      name: "",
      icon: <FaSnapchatSquare size={35} />,
    },
    {
      path: "/Server3",
      name: "",
      icon: <FaGithubSquare size={35} />,
    },
    {
      path: "/Server4",
      name: "",
      icon: <FaRedditSquare size={35} />,
    },
    {
      path: "/Server5",
      name: "",
      icon: <FaBehanceSquare size={35} />,
    },
  ];
  return (
    <div className="container">
      <div className="sidebar">
        <div className="top_section">
          <Link to={mainLogo.path}>{mainLogo.icon} </Link>
          <div className="bars">
            <MdOutlineRemove />
          </div>
        </div>
        {menuItem.map((item, index) => (
          <Link
            to={item.path}
            className="link"
            activeclassname="active"
            key={index}
          >
            <div className="icon">{item.icon}</div>
            <div className="link_text">{item.name}</div>
          </Link>
        ))}
      </div>
      <main>{children}</main>
    </div>
  );
}

export { Sidebar };
