import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails.jsx";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Projects />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;

