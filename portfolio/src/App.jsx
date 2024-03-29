import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "../src/components/Header";
import Home from './pages/Home';
import { Abaut } from "./pages/Abaut";
import Projects from "./pages/Projects";



function App() {

  return (
    <>
      <Router>
        <Header />
      
        <div className="container mx-auto p-10 rounded  ">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="abaut" element={<Abaut />} />
            <Route path="projects" element={<Projects />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
