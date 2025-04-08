import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Envelope, LockKey, Eye, EyeSlash } from "@phosphor-icons/react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validação básica
    if (!email || !password) {
      setError("Por favor, preencha todos os campos");
      return;
    }

    // Simulação de login - em produção seria uma chamada para API
    if (email === "admin@odontolegal.com" && password === "admin") {
      localStorage.setItem("user", JSON.stringify({ email, role: "admin" }));
      navigate("/dashboard");
    } else {
      setError("Email ou senha inválidos");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue_primary">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-blue_primary">OdontoLegal</h1>
          <p className="text-gray_primary">Faça login para continuar</p>
        </div>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-medium mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Envelope size={20} className="text-gray_primary" />
              </div>
              <input
                id="email"
                type="email"
                className="input-field pl-10 w-full"
                placeholder="seu.email@exemplo.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-medium mb-2"
              htmlFor="password"
            >
              Senha
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <LockKey size={20} className="text-gray_primary" />
              </div>
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                className="input-field pl-10 w-full pr-10"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-gray_primary hover:text-blue_primary focus:outline-none"
                >
                  {showPassword ? <EyeSlash size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <input
                id="remember-me"
                type="checkbox"
                className="h-4 w-4 text-blue_primary border-gray_neutro rounded"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-700"
              >
                Lembrar-me
              </label>
            </div>
            <a href="#" className="text-sm text-blue_primary hover:underline">
              Esqueceu a senha?
            </a>
          </div>

          <button type="submit" className="w-full btn-primary py-2 px-4">
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
