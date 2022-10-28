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
import Tippy from "@tippyjs/react";

function Sidebar() {
  const mainLogo = {
    path: "/direct",
    name: "Direct messages",
    icon: <TbBrandDiscord size={38} color="white" />,
  };
  const menuItem = [
    {
      path: "/Server1",
      name: "steamServer",
      icon: <FaSteamSquare size={38} />,
    },
    {
      path: "/Server2",
      name: "snapchatServer",
      icon: <FaSnapchatSquare size={38} />,
    },
    {
      path: "/Server3",
      name: "githubServer",
      icon: <FaGithubSquare size={38} />,
    },
    {
      path: "/Server4",
      name: "redditServer",
      icon: <FaRedditSquare size={38} />,
    },
    {
      path: "/Server5",
      name: "behanceServer",
      icon: <FaBehanceSquare size={38} />,
    },
  ];
  return (
    <div className="sidebar">
      <div className="top_section">
        <Tippy
          content={<span style={{ color: "wheat" }}>{mainLogo.name}</span>}
          placement="right"
        >
          <Link to={mainLogo.path} key="99">
            {mainLogo.icon}{" "}
          </Link>
        </Tippy>
        <div className="bars">
          <MdOutlineRemove />
        </div>
      </div>
      {menuItem.map((item, index) => (
        <>
          <Tippy
            content={<span>{item.name}</span>}
            placement="right"
            key={index}
          >
            <Link to={item.path} className="link" activeclassname="active">
              <div className="icon" key={index}>
                {item.icon}{" "}
              </div>
            </Link>
          </Tippy>
        </>
      ))}
    </div>
  );
}

export { Sidebar };
