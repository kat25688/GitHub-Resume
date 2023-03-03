//added card and button components
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Contact from "./contact";
import Education from "./education";
import Experience from "./experience";
import Header from "./header";
import Menu from "./menu";
import References from "./references";
import Skills from "./skills";
import Summary from "./summary";

function App() {
  return (
    <div className="App">
      <Menu />
      <Header />
      <Routes>
        <Route exact path="/" element={<Summary />} />
        <Route exact path="/skills" element={<Skills />} />
        <Route exact path="/experience" element={<Experience />} />
        <Route path="/education" element={<Education />} />
        <Route path="/references" element={<References />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
