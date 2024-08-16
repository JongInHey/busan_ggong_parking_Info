import { HashRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Detail } from "./pages/Detail/Detail";
import { Search } from "./pages/Search/Search";
import { PageNotFound } from "./pages/PageNotFound";

function Router() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/detail/:id" element={<Detail />}></Route>
        <Route path="/search" element={<Search />}></Route>
        <Route path="/*" element={<PageNotFound />}></Route>
      </Routes>
    </HashRouter>
  );
}

export default Router;
