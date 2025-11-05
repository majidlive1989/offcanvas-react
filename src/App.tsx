import { useState } from "react";

import "./App.css";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Offcanvas } from "./components/Offcanvas";

function App() {
  return (
    <div className="h-full flex">
      <Header />
      <Main />
      <Offcanvas />
    </div>
  );
}

export default App;
