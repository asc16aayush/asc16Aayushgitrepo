import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";

import "./index.scss";

import Header from './Header';
import Footer from './Footer';
import WorkshopsList from "./WorkshopsList";
import WorkshopsDetails from "detailspage/WorkshopDetails";

const App = () => (
  <BrowserRouter>
    <div className="text-3xl mx-auto max-w-6xl">
      <Header />
      <div className="my-10">
        <Routes>
        <Route path="" element={
          <section>
            <h1>Home App (MFE App Shell)</h1>
            <hr className="my-4" />
            <div>
              <Link to="/workshops" style={{ textDecoration: 'underline', color: 'blue' }}>List of Workshops</Link>
            </div>
          </section>
        } />
          <Route path="/workshops" element={<WorkshopsList />} />
          <Route path="/workshops/:id" element={<WorkshopsDetails />} />
        </Routes>
      </div>
      <Footer />
    </div>
  </BrowserRouter>
);

const rootElement = document.getElementById("app")
if (!rootElement) throw new Error("Failed to find the root element")

const root = ReactDOM.createRoot(rootElement)

root.render(<App />)
