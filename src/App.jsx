import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Edit from "./components/Edit";
import Note from "./components/Note";
import { AppProvider } from "./context/context";

const App = () => {
  return (
    
      <AppProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<Note />} />
            <Route path="/edit" element={<Edit />} />
          </Routes>
        </BrowserRouter>
      </AppProvider>
  );
};

export default App;
