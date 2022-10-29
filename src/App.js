import { Navibar } from "./app/ui/Navibar";
import { DirectMessages } from "./app/pages/Direct";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { PageNotFound } from "./app/pages/PageNotFound";
import { Main } from "./app/pages/Main";
import { Inbox } from "./app/pages/Inbox";
import { Search } from "./app/pages/Search";
import { Help } from "./app/pages/Help";
import { Sidebar } from "./app/ui/Sidebar";
import "./css/style.css";
import "tippy.js/dist/tippy.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { SidebarSecond } from "./app/ui/SidebarSecond";
import { Server } from "./app/components/Server";
import { Page } from "./app/pages/Page";
import { Notifications } from "./app/pages/Notifications";

function App() {
  return (
    <>
      <Router>
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
  );
}

export default App;
