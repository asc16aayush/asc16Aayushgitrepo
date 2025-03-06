// import React from "react";
// import ReactDOM from "react-dom";

// import "./index.scss";

// const App = () => (
//   <div className="mt-10 text-3xl mx-auto max-w-6xl">
//     <div>Name: home</div>
//     <div>Framework: react</div>
//     <div>Language: JavaScript</div>
//     <div>CSS: Tailwind</div>
//   </div>
// );
// ReactDOM.render(<App />, document.getElementById("app"));


import React from "react";
import ReactDOM from "react-dom/client";

import "./index.scss";

import Header from "./Header";
import Footer from "./Footer";

const App = () => (
  <div className="text-3xl mx-auto max-w-6xl">
    <Header />
    <div className="my-10">
      Welcome to Workshops App
    </div>
    <Footer />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<App />);