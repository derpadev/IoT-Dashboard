import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login";
import { ProtectedRoutes } from "./routes/ProtectedRoutes";
import { Dashboard } from "./pages/Dashboard";
import { Signup } from "./pages/Signup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Login />} path="/login" />
        <Route element={<Signup />} path="/signup" />
        <Route element={<ProtectedRoutes />}>
          <Route element={<Dashboard />} path="/dashboard"/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
