import { BrowserRouter, Route, Routes } from "react-router-dom";
import r from "./routes";

import Container from "./components/Container";
import SideBar from "./components/SideBar";

import CharactersView from "./views/CharactersView";
import EpisodesView from "./views/EpisodesView";
import LocationsView from "./views/LocationsView";
import MyWatchListView from "./views/MyWatchListView";
import HomeView from "./views/HomeView/HomeView";

function App() {
  return (
    <BrowserRouter>
      <Container className="app">
        <SideBar />
        <Container className="main-container">
          <Routes>
            <Route path={r.Home} element=<HomeView/> />
            <Route path={r.Characters} element=<CharactersView/> />
            <Route path={r.Episodes} element=<EpisodesView/> />
            <Route path={r.Locations} element=<LocationsView/> />
            <Route path={r.My_Watch_List} element=<MyWatchListView/> />
          </Routes>
        </Container>
      </Container>
    </BrowserRouter>
  );
}

export default App;
