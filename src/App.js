import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import UserDetail from './pages/UserDetail';
import UserList from './pages/UserList';
import Dashboard from './pages/Dahsboard';
import ProtectedRoute from './pages/ProtectedRoute';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <div>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dashboard" element={isLoggedIn ? <Dashboard /> : <Navigate to="/" />} />
          <Route path="/users" element={isLoggedIn ? <UserList /> : <Navigate to="/" />} />
          <Route path="/users/:id" element={isLoggedIn ? <UserDetail /> : <Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
