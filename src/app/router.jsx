import {
    createBrowserRouter,
} from "react-router-dom";

import Login from "../features/auth/pages/Login";

import Dashboard from "../pages/Dashboard";

import NotFound from "../pages/NotFound";

import ProtectedRoute from "../utils/protected-route";
import Register from "../features/auth/pages/Register";
import UploadModel from "../pages/UploadModel";
import LandingPage from "../pages/LandingPage";

export const router =
    createBrowserRouter([
        {
            path: "/login",
            element: <Login />,
        },

        {
            path: "/register",
            element: <Register />,
        },

        {
            path: "/",
            element: <LandingPage />,
        },

        {
            path: "/dashboard",
            element: (
                <ProtectedRoute>
                    <Dashboard />
                </ProtectedRoute>
            ),
        },

        {
            path: "/upload",
            element: (
                <ProtectedRoute>
                    <UploadModel />
                </ProtectedRoute>
            ),
        },

        {
            path: "*",
            element: <NotFound />,
        },
    ]);