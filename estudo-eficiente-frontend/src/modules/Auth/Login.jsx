import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import useApi from "../../hooks/UseApiHook";
import { AuthContext } from "../../context/AuthContext";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const {
    data,
    error: apiError,
    loading,
    fetchData,
  } = useApi("/api/login", "POST", {
    email,
    password,
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const toastId = toast.loading("Processando...");
    try {
      const response = await fetchData();

      if (response && response.access_token) {
        toast.update(toastId, {
          render: `Bem-vindo, ${response.user.name}!`,
          type: "success",
          isLoading: false,
          autoClose: 3000, // Fecha após 3 segundos
        });
        localStorage.setItem("token", response.access_token);
        navigate("/");
        login({
          name: response.user.name,
          email: response.user.email,
        });
      }
    } catch (error) {
      toast.error(error.response.data.error);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-black mb-6 text-center">
          Login
        </h1>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block font-bold text-black mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-3 rounded bg-stone-100 text-black focus:outline-none focus:ring-2 focus:ring-blue-700"
              placeholder="Digite seu email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="mb-6">
            <label
              className="block font-bold text-black mb-2"
              htmlFor="password"
            >
              Senha
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-3 rounded bg-stone-100 text-black focus:outline-none focus:ring-2 focus:ring-blue-700"
              placeholder="Digite sua senha"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-600 transition duration-300"
            disabled={loading}
          >
            Login
          </button>
        </form>
        <p className="text-gray-400 text-center mt-4">
          Não possui conta ?{" "}
          <Link to="/register" className="text-blue-500 hover:underline">
            Registrar
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
