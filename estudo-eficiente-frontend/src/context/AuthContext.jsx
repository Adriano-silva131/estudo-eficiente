import {createContext, useContext} from 'react'
import {fetchUserAPI, loginAPI, logoutAPI} from "../api/authAPI";
import {useNavigate} from 'react-router-dom'
import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import PropTypes from "prop-types";

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    const { data: user, status } = useQuery({
        queryKey: ['user'],
        queryFn: fetchUserAPI,
        staleTime: Infinity,
        retry: false,
    });

    const loginMutation = useMutation({
        mutationFn: loginAPI,
        onSuccess: async () => {
            await queryClient.invalidateQueries({ queryKey: ['user'] });
            navigate('/dashboard');
        }
    });

    const logoutMutation = useMutation({
        mutationFn: logoutAPI,
        onSuccess: () => {
            queryClient.setQueryData(['user'], null);
            navigate('/login');
        },
    });

    const login = (credentials) => loginMutation.mutateAsync(credentials);
    const logout = () => logoutMutation.mutateAsync();

    return (
        <AuthContext.Provider value={{ user, status, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired
};

export const useAuth = () => useContext(AuthContext);