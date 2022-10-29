import { TbBrandDiscord } from "react-icons/tb";
import {
  FaSteamSquare,
  FaRedditSquare,
  FaGithubSquare,
  FaSnapchatSquare,
  FaBehanceSquare,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Tippy from "@tippyjs/react";

function Sidebar() {
  const mainLogo = {
    path: "/direct",
    name: "Direct messages",
    icon: <TbBrandDiscord size={38} color="white" />,
  };
  const menuItem = [
    {
      path: "/Steam server",
      name: "steamServer",
      icon: <FaSteamSquare size={38} />,
    },
    {
      path: "/Snapchat server",
      name: "snapchatServer",
      icon: <FaSnapchatSquare size={38} />,
    },
    {
      path: "/Github server",
      name: "githubServer",
      icon: <FaGithubSquare size={38} />,
    },
    {
      path: "/Reddit server",
      name: "redditServer",
      icon: <FaRedditSquare size={38} />,
    },
    {
      path: "/Behance server",
      name: "behanceServer",
      icon: <FaBehanceSquare size={38} />,
    },
  ];
  return (
    <div className="sidebar" key="91">
      <div className="top_section" key="92">
        <Tippy
          content={<span style={{ color: "ghostwhite" }}>{mainLogo.name}</span>}
          placement="right"
          key="93"
        >
          <Link to={mainLogo.path} key="94">
            {mainLogo.icon}{" "}
          </Link>
        </Tippy>
      </div>
      {menuItem.map((item, index) => (
        <>
          <Tippy
            content={<span>{item.name}</span>}
            placement="right"
            key={index + 1}
          >
            <Link
              to={item.path}
              className="link"
              activeclassname="active"
              key={index + 2}
            >
              <div className="icon" key={index + 3}>
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
