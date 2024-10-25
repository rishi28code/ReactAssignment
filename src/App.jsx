import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from "./components/Navbar";
import Home from "./components/Home";

const App = () => {
  return (
    <div>
      {/* Navbar and Home components */}
      <Navbar />
      
      <Home />
    </div>
  );
};

export default App;



