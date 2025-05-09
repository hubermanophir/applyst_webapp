import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { AuthProvider } from "./hooks/Auth";
import { Home } from "./pages/Home";
import { AuthPage } from "./pages/AuthPage";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<AuthPage children={<Home />} />} />
          <Route path="*" element={<div>404 - Page Not Found</div>} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
