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

function App() {
  return (
    <>
      <Router>
        <Sidebar>
          {/*<Navibar />*/}

          <Main />
          <Routes>
            <Route exact path="/" element={<Main />} />
            <Route path="/direct" element={<DirectMessages />} />
            <Route path="/inbox" element={<Inbox />} />
            <Route path="/help" element={<Help />} />
            <Route path="/search" element={<Search />} />
            {/*<Route path="/category/:name" element={<Category />} />*/}
            {/*<Route path="/meal/:id" element={<Recipe />} />*/}
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Sidebar>
      </Router>
    </>
  );
}

export default App;
