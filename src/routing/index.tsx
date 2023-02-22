import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import WeatherPage from "../pages/WeatherPage";
import ProtectedRoutes from "./ProtectedRoutes";

const App = () => {

  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      
      <Route element={<ProtectedRoutes/>}>
        <Route path="/weather" element={<WeatherPage />} />
      </Route>
    </Routes>
  );
};

export default App;
