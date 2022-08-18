import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./Components/About";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import NoteState from "./context/Notes/NoteState";

function App() {
  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/about" element={<About />}></Route>
            <Route exact path="/" element={<Home />}></Route>
          </Routes>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
