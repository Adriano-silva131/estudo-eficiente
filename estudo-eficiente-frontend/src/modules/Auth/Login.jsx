import React, {useContext, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import useApi from "../../hooks/UseApiHook";
import {AuthContext} from "../../context/AuthContext";
import {toast} from "react-toastify";
import loginStudent from "../../assets/login-flat-human.png";
import googleIconUrl from "../../assets/google.png";
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
    if (!email) {
      setError(true);
      return;
    }

    if (!password) {
      setError(true);
      return;
    }

    const toastId = toast.loading("Processando...");
    try {
      const response = await fetchData();
      if (response && response.access_token) {
        toast.update(toastId, {
          render: `Bem-vindo, ${response.user.name}!`,
          type: "success",
          isLoading: false,
          autoClose: 3000,
        });
        localStorage.setItem("token", response.access_token);
        navigate("/app/dashboard");
        login({
          name: response.user.name,
          email: response.user.email,
        });
      }
    } catch (error) {
      toast.update(toastId, {
        render: `${error.response.data.error}`,
        type: "error",
        isLoading: false,
        autoClose: 3000,
      });
    }
  };

  return (
      <div className="h-[93vh] flex items-center justify-center bg-gray-100">
        <div className="flex w-full max-w-6xl shadow-lg">
          {/* Imagem à esquerda */}
          <div className="w-1/2 rounded-l-lg overflow-hidden bg-orange-500 hidden lg:block">
            <img
                src={loginStudent}
                alt="Login Illustration"
                className="w-full h-full object-cover"
            />
          </div>
          {/* Formulário à direita */}
          <div className="w-full lg:w-1/2 bg-white p-8 rounded-r-lg flex flex-col justify-center">
            <h1 className="text-2xl font-bold text-gray-700 mb-6 text-center">
              Login
            </h1>
            <h3 className="m-auto text-gray-700">Logo</h3>
            {error && <p className="text-red-500 text-center mb-4">{error}</p>}
            <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-6 m-auto">
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email
                </label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="block w-full rounded-md border border-gray-300 px-4 py-2 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-400"
                    placeholder="Digite seu email"
                />
              </div>
              {/* Senha */}
              <div>
                <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">
                  Senha
                </label>
                <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    className="block w-full rounded-md border border-gray-300 px-4 py-2 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-400"
                    placeholder="Digite sua senha"
                />
              </div>
              <div className="flex-col space-y-2">
                <button
                    type="submit"
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 rounded-md transition"
                >
                  Login
                </button>
                <button
                    type="submit"
                    className="w-full bg-white text-gray-700 text-black py-2 rounded-md transition flex items-center justify-center gap-2 border-2 border-gray-300"
                >
                  <img src={googleIconUrl} alt="" className="h-5 w-5 shrink-0 bg-white" />
                  Continuar com o Google
                </button>
              </div>
            </form>
            <p className="text-gray-400 text-center mt-4">
              Não possui conta?{" "}
              <Link to="/register" className="text-orange-500 hover:underline">
                Registrar
              </Link>
            </p>
          </div>
        </div>
      </div>
  );
};

export default Login;
