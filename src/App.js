import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css"
import Home from "./pages/Home";
import Course from "./pages/Course"
import Filter from "./pages/Filter"


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course/:id" element={<Course />} />
          <Route path="/filter" element={<Filter />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
