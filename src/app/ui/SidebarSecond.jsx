function SidebarSecond() {
  const mainLogo = {
    path: "/direct",
    name: "Direct messages",
    icon: "",
  };
  const menuItem = [
    {
      path: "/Server1",
      name: "steamServer",
      icon: "",
    },
    {
      path: "/Server2",
      name: "snapchatServer",
      icon: "",
    },
    {
      path: "/Server3",
      name: "githubServer",
      icon: "",
    },
    {
      path: "/Server4",
      name: "redditServer",
      icon: "",
    },
    {
      path: "/Server5",
      name: "behanceServer",
      icon: "",
    },
  ];
  return (
    <div className="container">
      <div className="sidebar-second">
        SidebarSecondSidebar
        {/*  <div className="top_section">*/}
        {/*    <Tippy*/}
        {/*      content={<span style={{ color: "wheat" }}>{mainLogo.name}</span>}*/}
        {/*      placement="right"*/}
        {/*    >*/}
        {/*      <Link to={mainLogo.path}>{mainLogo.icon} </Link>*/}
        {/*    </Tippy>*/}
        {/*    <div className="bars">*/}
        {/*      <MdOutlineRemove />*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*  {menuItem.map((item, index) => (*/}
        {/*    <>*/}
        {/*      <Tippy content={<span>{item.name}</span>} placement="right">*/}
        {/*        <Link*/}
        {/*          to={item.path}*/}
        {/*          className="link"*/}
        {/*          activeclassname="active"*/}
        {/*          key={index}*/}
        {/*        >*/}
        {/*          <div className="icon">{item.icon}</div>*/}
        {/*        </Link>*/}
        {/*      </Tippy>*/}
        {/*    </>*/}
        {/*  ))}*/}
        {/*</div>*/}
        {/*<main>{children}</main>*/}
      </div>
    </div>
  );
}

export { SidebarSecond };
