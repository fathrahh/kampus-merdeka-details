import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Magang from "./pages/Magang";
import Stupen from "./pages/Stupen";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Magang />} />
        <Route path="/stupen" element={<Stupen />} />
      </Routes>
    </Router>
  );
}

export default App;
