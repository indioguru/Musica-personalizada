import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Footer from "../components/Footer";
import Logo from "../components/Logo";
import AboutYou from "../pages/AboutYou";
import Home from "../pages/Home";
import NamePage from "../pages/namePage/NamePage";
import Song from "../pages/Song";

const Router = () => {
  return (
    <HashRouter>
      <Logo />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/namePage" element={<NamePage />} />
        <Route path="/aboutYou" element={<AboutYou />} />
        <Route path="/song" element={<Song />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
};

export default Router;
