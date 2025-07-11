import React from "react";
import { useRoutes } from "react-router-dom";
import router from "./router";

function App() {
  return (
    <div className="App">
      首页
      <div className="main">{useRoutes(router)}</div>
    </div>
  );
}

export default App;
