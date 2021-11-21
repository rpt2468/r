import "./App.css";
import Login from "./Components/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Users from "./Components/Users";

function App() {
  return (
    <main>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/users" element={<Users />} />
          <Route path="*" element={<Login />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
