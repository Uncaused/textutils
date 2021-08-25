import NavBar from "./components/NavBar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/About";

function App() {
  const [mode, setMode] = useState("light"); // normally app is light mode
  function changeMode() {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
    }
  }

  return (
    <>
      <Router>
        <NavBar title="TextUtils" mode={mode} toggleMode={changeMode} />
        <div className="container my-3">
          <Switch>
            <Route path="/textutils/about">
              <About mode={mode} />
            </Route>
            <Route path="/textutils">
              <TextForm heading="Enter Your text below!" mode={mode} />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;