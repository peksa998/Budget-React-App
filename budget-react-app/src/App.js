import React from "react";
import { Header } from "./components/Header";
import { GlobalProvider } from "./context/GlobalState";

import "./App.css";

function App() {
  return (
    <GlobalProvider>
      <Header title="Budget App" />
    </GlobalProvider>
  );
}

export default App;
