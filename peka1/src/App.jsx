// import React from 'react';
// import LandingPage from "./componen/landingPage";

import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from "./componen/landingPage";
import Login from "./componen/login";
import Register from "./componen/register";
import Dashboard from './componen/dashboard';
import TentangKami from './componen/tentangKami';
import Database from './componen/Database';
import Editor from './componen/Editor';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />}>
        </Route>
        <Route path="Login" element={<Login />}>
        </Route>
        <Route path="Register" element={<Register />}>
        </Route>
        <Route path="Dashboard" element={<Dashboard />}>
        </Route>
        <Route path="TentangKami" element={<TentangKami />}>
        </Route>
        <Route path="Editor" element={<Editor />}>
        </Route>
        <Route path="Database" element={<Database />}>
        </Route>
      </Routes>
    </Router>
  );
}

const root=
ReactDOM.createRoot (document.getElementById ('root'));
root.render(<app />)
export default App;