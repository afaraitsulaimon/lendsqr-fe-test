import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.scss';
import LoginPage from './pages/login/LoginPage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" exact element={<LoginPage/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
