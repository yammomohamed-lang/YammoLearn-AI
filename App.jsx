import React from "react";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="app">
      <h1>YammoLearn AI</h1>
      <Dashboard />
    </div>
  );
}

export default App;
function start() {
  window.location.href = "courses.html";
}