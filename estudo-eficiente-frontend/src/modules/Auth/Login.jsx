import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import useApi from "../../hooks/UseApiHook";
import { AuthContext } from "../../context/AuthContext";
import { toast } from "react-toastify";
import { Button, TextField } from "@mui/material";

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
        navigate("/");
        login({
          name: response.user.name,
          email: response.user.email,
        });
      }
    } catch (error) {
      // toast.error(error.response.data.error);
      toast.update(toastId, {
        render: `${error.response.data.error}`,
        type: "error",
        isLoading: false,
        autoClose: 3000,
      });
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
            <TextField
              id="email"
              label="Digite seu email"
              type="email"
              variant="outlined"
              fullWidth
              placeholder="Digite seu email"
              value={email}
              error={error}
              helperText={error ? "O campo email não pode estar vazio." : ""}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="mb-6">
            <TextField
              id="password"
              label="Digite sua senha"
              type="password"
              variant="outlined"
              fullWidth
              value={password}
              error={error}
              helperText={error ? "O campo de senha não pode estar vazio." : ""}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Digite sua senha"
            />
          </div>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            disabled={loading}
            style={{
              padding: "12px",
              borderRadius: "8px",
              transition: "background-color 0.3s",
            }}
          >
            Login
          </Button>
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
