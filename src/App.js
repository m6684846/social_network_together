import React from "react";
import Header from "./components/Header.jsx";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Profile from "./components/Profile.jsx";


const App = () => {
  return (
    <div>
      <div className="app-wrapepr">
      <Header/>
        <Navbar/>
        <Profile/>
      </div>
    </div>
  );
};

export default App;
