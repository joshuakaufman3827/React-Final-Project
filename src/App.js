import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Projects />} />
        <Route path="/details/:id" element={<ProjectDetails />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;



