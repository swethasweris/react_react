import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";

const App = () => {
  return (
    <Router>
      <div>
        <h1 style={styles.header}>Welcome to My App</h1>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
};

// Basic inline styles
const styles = {
  header: {
    textAlign: "center",
    marginTop: "20px",
    fontSize: "24px",
  },
};

export default App;
