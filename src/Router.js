import { HashRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Detail } from "./pages/Detail/Detail";
import { Search } from "./pages/Search/Search";
import { PageNotFound } from "./pages/PageNotFound";
import { routes } from "./routes";

function Router() {
  return (
    <HashRouter>
      <Routes>
        <Route path={routes.home} element={<Home />}></Route>
        <Route path={routes.detail} element={<Detail />}></Route>
        <Route path={routes.search} element={<Search />}></Route>
        <Route path="/*" element={<PageNotFound />}></Route>
      </Routes>
    </HashRouter>
  );
}

export default Router;
