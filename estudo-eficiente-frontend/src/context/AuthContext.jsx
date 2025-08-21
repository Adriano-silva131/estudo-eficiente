import { createContext, useContext } from "react";
import { fetchUserAPI, loginAPI, logoutAPI } from "../api/authAPI";
import { useNavigate } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import PropTypes from "prop-types";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const {
    data: user,
    isLoading,
    isFetching,
    isError,
  } = useQuery({
    queryKey: ["user"],
    queryFn: fetchUserAPI,
    staleTime: Infinity,
    refetchOnWindowFocus: false,
    retry: false,
  });

  const loginMutation = useMutation({
    mutationFn: loginAPI,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["user"] });
      await queryClient.refetchQueries({ queryKey: ["user"], type: "active" });
      navigate("/dashboard");
    },
  });

  const logoutMutation = useMutation({
    mutationFn: logoutAPI,
    onSuccess: () => {
      queryClient.setQueryData(["user"], null);
      queryClient.invalidateQueries();
      navigate("/login");
    },
  });

  const login = (credentials) => loginMutation.mutateAsync(credentials);
  const logout = () => logoutMutation.mutateAsync();

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        isFetching,
        isError,
        login: (credentials) => loginMutation.mutateAsync(credentials),
        logout: () => logoutMutation.mutateAsync(),
        isLoggingIn: loginMutation.isPending,
        isLoggingOut: logoutMutation.isPending,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useAuth = () => useContext(AuthContext);
