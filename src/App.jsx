import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Cases from "./pages/Cases";
import Evidences from "./pages/Evidences";
import Reports from "./pages/Reports";
import AdminUsers from "./pages/AdminUsers";
import NotFound from "./pages/NotFound";
import "./assets/styles/index.css";

function App() {
  // Função para verificar se o usuário está autenticado
  const isAuthenticated = () => {
    return localStorage.getItem("user") !== null;
  };

  // Componente de rota protegida
  const ProtectedRoute = ({ children }) => {
    if (!isAuthenticated()) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="cases" element={<Cases />} />
          <Route path="evidences" element={<Evidences />} />
          <Route path="reports" element={<Reports />} />
          <Route path="admin/users" element={<AdminUsers />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
