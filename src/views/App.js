import React from "react";

import List from "./List";
import LocalList from "./LocalList";


function App() {
  return (
    <div className="container">
      <LocalList />
      <List />
    </div>
  );
}

export default App;
