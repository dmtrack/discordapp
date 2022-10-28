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
    <>
      <div>
        <div
          style={{
            height: "50px",
            borderBottom: "outset",
            borderWidth: "1px",
            borderColor: "darkgray",
            display: "table-cell",
            verticalAlign: "middle",
          }}
        >
          Second NavBar Second NavBar Second NavBar
        </div>
      </div>
    </>
  );
}

export { SidebarSecond };
