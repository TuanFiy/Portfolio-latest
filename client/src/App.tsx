import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import BowlFit from "./pages/BowlFit";
import CinemaTicket from "./pages/CinemaTicket";
import MusicPlayer from "./pages/MusicPlayer";
import MiniProject from "./pages/MiniProject";
import FynxEComerce from "./pages/fynxEComerce";

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="BowlFit" element={<BowlFit />} />
          <Route path="CinemaTicket" element={<CinemaTicket />} />
          <Route path="MusicPlayer" element={<MusicPlayer />} />
          <Route path="Portfolio" element={<Home />} />
          <Route path="MiniProject" element={<MiniProject />} />
          <Route path="fynxEComerce" element={<FynxEComerce />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
