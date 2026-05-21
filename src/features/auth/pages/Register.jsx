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
    registerUser,
} from "../services/auth.service";

const registerSchema = z.object({
    name: z
        .string()
        .min(3, "Name minimum 3 characters"),

    email: z
        .string()
        .email("Invalid email"),

    password: z
        .string()
        .min(6, "Password minimum 6 characters"),
});

const Register = () => {

    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: {
            errors,
            isSubmitting,
        },
    } = useForm({
        resolver:
            zodResolver(registerSchema),
    });

    const onSubmit = async (
        values
    ) => {

        try {

            const response =
                await registerUser(values);

            toast.success(
                response.message
            );

            navigate("/login");

        } catch (error) {
            toast.error(
                error.response?.data
                    ?.message ||
                "Registration failed"
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
                        Register
                    </h1>

                    <p className="text-slate-400 mt-2">
                        Create account
                    </p>
                </div>

                <Input
                    label="Name"
                    type="text"
                    placeholder="Enter name"
                    error={errors.name?.message}
                    {...register("name")}
                />

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
                    Register
                </Button>

                <p className="text-center text-sm text-slate-400">
                    Already have account?{" "}

                    <Link
                        to="/login"
                        className="text-blue-400"
                    >
                        Login
                    </Link>
                </p>
            </form>
        </AuthLayout>
    );
};

export default Register;