import {
    createContext,
    useEffect,
    useState,
} from "react";

import {
    getProfile,
    logoutUser,
} from "../services/auth.service";

export const AuthContext =
    createContext(null);

export const AuthProvider = ({
    children,
}) => {
    const [user, setUser] =
        useState(null);

    const [loading, setLoading] =
        useState(true);

    const fetchProfile = async () => {

        try {

            const response =
                await getProfile();

            setUser(response.data);

        } catch (error) {

            setUser(null);

        } finally {

            setLoading(false);
        }
    };

    useEffect(() => {

        const publicRoutes = [
            "/login",
            "/register",
        ];

        const currentPath =
            window.location.pathname;

        if (
            !publicRoutes.includes(
                currentPath
            )
        ) {
            fetchProfile();
        } else {
            setLoading(false);
        }

    }, []);

    const logout = async () => {
        try {
            await logoutUser();

            setUser(null);

            window.location.href =
                "/login";
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                setUser,
                loading,
                fetchProfile,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};