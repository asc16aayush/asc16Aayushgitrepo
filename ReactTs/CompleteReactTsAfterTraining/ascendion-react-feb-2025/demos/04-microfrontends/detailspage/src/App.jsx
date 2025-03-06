import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import "./index.scss";

import WorkshopDetails from "./WorkshopDetails";


const Header = React.lazy(() => import('home/Header'));
const Footer = React.lazy(() => import('home/Footer'));

const App = () => (
  <BrowserRouter>
    <div className="text-3xl mx-auto max-w-6xl">
      <Suspense fallback={<div>Loading header...</div>}>
        <Header />
      </Suspense>
      <div className="my-10">
        <Routes>
          <Route path="/workshops/:id" element={<WorkshopDetails />} />
        </Routes>
      </div>
      <Suspense fallback={<div>Loading footer...</div>}>
        <Footer />
      </Suspense>
    </div>
  </BrowserRouter>
);
const rootElement = document.getElementById("app")
if (!rootElement) throw new Error("Failed to find the root element")

const root = ReactDOM.createRoot(rootElement)

root.render(<App />)