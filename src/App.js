import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "../src/routes";
import Header from "../src/components/header";
import Footer from "../src/components/footer";
import { MockDataProvider } from "./context/mock-data";
import "./App.css";

function App() {
  return (
    <Router className="grid">
      <Header />
      <main className="main">
        <div className="container">
          <MockDataProvider>
            <Routes />
          </MockDataProvider>
        </div>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
