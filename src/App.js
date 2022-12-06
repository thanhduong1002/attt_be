import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Feedback from "./pages/Feedback";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Test from "./pages/Test";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/test" element={<Test />} />
        <Route exact path="/search" element={<Search />} />
        <Route exact path="/feedback" element={<Feedback />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
