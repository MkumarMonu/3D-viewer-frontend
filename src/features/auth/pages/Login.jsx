import {
    Link,
    useNavigate,
} from "react-router-dom";

import {
    useForm,
} from "react-hook-form";

import {
    zodResolver,
} from "@hookform/resolvers/zod";

import { z } from "zod";
import toast from "react-hot-toast";

import AuthLayout from "../../../layouts/AuthLayout";

import Input from "../../../components/ui/Input";

import Button from "../../../components/ui/Button";

import {
    loginUser,
} from "../services/auth.service";
import {
    useAuth,
} from "../hooks/useAuth";

const loginSchema = z.object({
    email: z
        .string()
        .email("Invalid email"),

    password: z
        .string()
        .min(6, "Password minimum 6 characters"),
});

const Login = () => {

    const navigate = useNavigate();

    const { fetchProfile } =
        useAuth();

    const {
        register,
        handleSubmit,
        formState: {
            errors,
            isSubmitting,
        },
    } = useForm({
        resolver:
            zodResolver(loginSchema),
    });

    const onSubmit = async (
        values
    ) => {

        try {

            const response =
                await loginUser(values);

            toast.success(
                response.message
            );

            await fetchProfile();

            navigate("/");
        } catch (error) {

            toast.error(
                error.response?.data
                    ?.message ||
                "Login failed"
            );
        }
    };

    return (
        <AuthLayout>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-5"
            >
                <div className="text-center mb-4">
                    <h1 className="text-4xl font-bold">
                        Login
                    </h1>

                    <p className="text-slate-400 mt-2">
                        Welcome back
                    </p>
                </div>

                <Input
                    label="Email"
                    type="email"
                    placeholder="Enter email"
                    error={errors.email?.message}
                    {...register("email")}
                />

                <Input
                    label="Password"
                    type="password"
                    placeholder="Enter password"
                    error={errors.password?.message}
                    {...register("password")}
                />
                <Button loading={isSubmitting}>
                    Login
                </Button>

                <p className="text-center text-sm text-slate-400">
                    Don't have account?{" "}

                    <Link
                        to="/register"
                        className="text-blue-400"
                    >
                        Register
                    </Link>
                </p>
            </form>
        </AuthLayout>
    );
};

export default Login;