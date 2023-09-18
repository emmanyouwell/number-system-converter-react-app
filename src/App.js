import React from "react";
// import "./index.css";

import Home from "./routes/Home";
// import WholeNumber from "./routes/WholeNumber";
import Binary from "./routes/WholeNumber/Binary.js";
// import Project from "./routes/Project";
// import Contact from "./routes/Contact";
import Octal from "./routes/WholeNumber/Octal.js";
import Hexa from "./routes/WholeNumber/Hexadecimal.js";
import AnyBase from "./routes/WholeNumber/AnyBase.js";
import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/whole-number/binary" element={<Binary/>}/>
      <Route path="/whole-number/octal" element={<Octal/>}/>
      <Route path="/whole-number/hexadecimal" element={<Hexa/>}/>
      <Route path="/whole-number/anybase" element={<AnyBase/>}/>
    </Routes>
    </>
  );
}

export default App;
