import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import BowlFit from "./pages/BowlFit";
import CinemaTicket from "./pages/CinemaTicket";
import FynxEComerce from "./pages/fynxEComerce";
import MusicPlayer from "./pages/MusicPlayer";
import MiniProject from "./pages/MiniProject";

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="BowlFit" element={<BowlFit />} />
          <Route path="CinemaTicket" element={<CinemaTicket />} />
          <Route path="FynxEComerce" element={<FynxEComerce />} />
          <Route path="MusicPlayer" element={<MusicPlayer />} />
          <Route path="Portfolio" element={<Home />} />
          <Route path="MiniProject" element={<MiniProject />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
