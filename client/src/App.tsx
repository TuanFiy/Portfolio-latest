import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import BowlFit from "./pages/BowlFit";

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="BowlFit" element={<BowlFit />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
