import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Blogs from "./Pages/Blogs";
import NoPage from "./Pages/NoPage";
import PlacesRoute from "./Pages/PlacesRoute";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/places" element={<PlacesRoute />} />
            <Route path="/*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
