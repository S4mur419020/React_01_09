import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./register.css";

export default function RegistrationPage() {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState({});

    function validateForm() {
        const newErrors = {};
        if (!email) {
            newErrors.email = "Email is required";
        } else if (!/^\S+@\S+\.\S+$/.test(email)) {
            newErrors.email = "Invalid email format";
        }
        if (!password) {
            newErrors.password = "Password is required";
        } else if (password.length < 6) {
            newErrors.password = "Password must be at least 6 characters long";
        }
        if (password !== confirmPassword) {
            newErrors.confirmPassword = "Passwords do not match";
        }
        setErrors({ ...newErrors });
        return newErrors;
    }

    function handleSubmit(e) {
        e.preventDefault();
        const validationErrors = validateForm();

        if (Object.keys(validationErrors).length === 0) {
            console.log("Registration successful", {
                fullName,
                email,
                password,
                confirmPassword,
            });
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>CREATE ACCOUNT</h2>

            <input
                type="text"
                placeholder="Full name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
            />

            <input
                type="text"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && (
                <span className="error-text">{errors.email}</span>
            )}

            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && (
                <span className="error-text">{errors.password}</span>
            )}

            <input
                type="password"
                placeholder="Confirm password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {errors.confirmPassword && (
                <span className="error-text">{errors.confirmPassword}</span>
            )}

            <button type="submit">CREATE ACCOUNT</button>

            <p>
                Already have an account?{" "}
                <NavLink to="/">Login</NavLink>
            </p>
        </form>
    );
}

