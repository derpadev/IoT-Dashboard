import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login";
import { ProtectedRoutes } from "./routes/ProtectedRoutes";
import { Dashboard } from "./pages/Dashboard";
import { Signup } from "./pages/Signup";
import { Home } from "./pages/Home";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Login />} path="/login" />
        <Route element={<Signup />} path="/signup" />
        <Route element={<ProtectedRoutes />}>
          <Route element={<Dashboard />} path="/dashboard" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
