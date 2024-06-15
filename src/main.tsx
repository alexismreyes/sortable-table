import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home.tsx";
import Sortable from "./components/Sortable.tsx";
import Page404 from "./components/Page404.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
        <Route index element={<Home/>} />
        <Route path="/sortable" element={<Sortable/>} />
        </Route>

        <Route path="*" element={<Page404/>} />    
      </Routes>
    </BrowserRouter>
  
);
