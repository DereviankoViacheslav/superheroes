import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "../src/routes";
import Header from "../src/components/header";
import Footer from "../src/components/footer";
import { Provider } from "react-redux";
import { store } from "./store";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <Router className="grid">
        <Header />
        <main className="main">
          <div className="container">
            <Routes />
          </div>
        </main>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
