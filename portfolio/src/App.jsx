import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "../src/components/Header";
import Home from './pages/Home';
//aqui main


function App() {

  return (
    <>
      <Router>
        <Header />
      
        <div className="container mx-auto p-10 rounded  ">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
