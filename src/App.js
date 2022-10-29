import "./App.css";

function App() {
  console.log("Hello world!");
  return (
<<<<<<< HEAD
    <>
      <Router basename="/discordapp">
        <div className="main-container">
          <div className="first-container">
            <Sidebar>
              <Routes>
                <Route path="/direct" element={<DirectMessages />} />
              </Routes>
            </Sidebar>
          </div>
          <div className="second-container">
            <SidebarSecond />
          </div>
          <div className="third-container">
            <Navibar />
            {/*<Main />*/}
            <Routes>
              <Route path="/" element={<DirectMessages />} />
              <Route path="/direct" element={<DirectMessages />} />
              <Route path="navi/inbox" element={<Inbox />} />
              <Route path="navi/help" element={<Help />} />
              <Route path="navi/members" element={<Members />} />
              <Route path="/:name" element={<Server />} />
              <Route path="navi/notifications" element={<Notifications />} />
              <Route path="navi/help" element={<Help />} />

              {/*<Route path="/category/:name" element={<Category />} />*/}
              {/*<Route path="/meal/:id" element={<Recipe />} />*/}
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
=======
    <div className="App">
      <h1>Hello!</h1>
    </div>
>>>>>>> 79fb0a48aab3d50b8b48240b601b95b9c36ab15c
  );
}

export default App;
