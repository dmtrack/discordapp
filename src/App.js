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
import { Col, Container, Row } from "react-bootstrap";
import { SidebarSecond } from "./app/ui/SidebarSecond";

function App() {
  return (
    <>
      <Router>
        <Container>
          <Row
            style={{
              display: "flex",
            }}
          >
            <Col md="2">
              <Sidebar>
                <Routes>
                  <Route path="/direct" element={<DirectMessages />} />
                </Routes>
              </Sidebar>
            </Col>
            <Col md="4">
              <SidebarSecond />
            </Col>
          </Row>
          <Row>
            <Col md="18">
              <Row className="navi-bar">
                <Navibar />
              </Row>
              <Row className="main">
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
              </Row>
            </Col>
          </Row>
        </Container>
      </Router>
    </>
  );
}

export default App;
