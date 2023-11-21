import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Project from "./components/Project";
import Awards from "./components/Awards";
import "./App.css";
import { useState } from "react";

const App = () => {
  const [id,changeId] = useState(false);
  

  return (
    <div className="App">
      <Router>
        <div className="header">
          <Link to="/" className="item">
            Home
          </Link>
          <br />
          <Link to="/AboutMe" className="item">
            AboutMe
          </Link>
          <br />
          <Link to="/Project" className="item">
            Project
          </Link>
          <br />
          
          <Link to="/Awards" className="item">
            Awards
          </Link>
        </div>

        <Routes >
          <Route
          exact
          path="/"
          element={<Home id={id} changeId={changeId} />}
          />
          <Route path="/AboutMe" 
          exact 
          element={<AboutMe id={id} changeId={changeId}/> }
          />

          <Route path="/Project" 
          exact 
          element={<Project id={id} changeId={changeId}/>} 
          />

          <Route path="/Awards" 
          exact 
          element={<Awards id={id} changeId={changeId}/>}
          />
        </Routes>
      </Router>

       
    </div>

    
  );
};
export default App;
