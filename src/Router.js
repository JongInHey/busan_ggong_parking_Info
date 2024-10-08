import { HashRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Detail } from "./pages/Detail/Detail";
import { Search } from "./pages/Search/Search";
import { PageNotFound } from "./pages/PageNotFound";
import { routes } from "./routes";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { useCallback, useState } from "react";
import { useCurrentPos } from "./lib/useCurrentPos";
import { Favor } from "./pages/Favor/Favor";

const { kakao } = window;

function Router() {
  const [map, setMap] = useState(null);
  const { lat, lon } = useCurrentPos();

  const handleMapLoad = useCallback((loadedMap) => {
    setMap(loadedMap);
  }, []);

  const panTo = () => {
    const moveLatLon = new kakao.maps.LatLng(lat, lon);

    map?.setLevel(3);
    map?.panTo(moveLatLon);
  };

  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route
          path={routes.home}
          element={<Home onMapLoad={handleMapLoad} />}
        ></Route>
        <Route path={routes.detail} element={<Detail />}></Route>
        <Route path={routes.search} element={<Search />}></Route>
        <Route path={routes.favor} element={<Favor />}></Route>
        <Route path="/*" element={<PageNotFound />}></Route>
      </Routes>
      <Footer onPanTo={panTo} />
    </HashRouter>
  );
}

export default Router;
