import { Link } from "react-router-dom";
import useForm from "../../hooks/useForm";

import styles from "../login/Login.module.css";
import { useContext } from "react";
import AuthContext from "../../contexts/authContext";




export default function Login() {

    const { loginSubmitHandler } = useContext(AuthContext);

    const { values, onChange, onSubmit, errors, submitError } = useForm({ email: "", password: "" }, loginSubmitHandler, validate);


    function validate(values) {
        const errors = {};

        if (!values.email) {
            errors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(values.email)) {
            errors.email = "Email address is invalid";
        }

        if (!values.password) {
            errors.password = "Password is required";
        } else if (values.password.length < 6) {
            errors.password = "Password must be at least 6 characters";
        }

        return errors;
    };


    return (
        <div className={styles.formWrapper}>
            <h2 className={styles.formTitle}>Login</h2>
            <form onSubmit={onSubmit} className={styles.loginForm}>
                <div className={styles.inputs}>
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" id="email" value={values.email} onChange={onChange} placeholder="example@domain.com" />
                    {errors.email && <p className={styles.error}>{errors.email}</p>}
                </div>
                <div className={styles.inputs}>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" value={values.password} onChange={onChange} placeholder="******" />
                    {errors.password && <p className={styles.error}>{errors.password}</p>}
                </div>
                <div className={styles.buttons}>
                    <button type="submit">Login</button>
                    {submitError && <p className={styles.error}>{submitError}</p>}
                    <p>Don't have an account? <Link className={styles.linkButton} to="/register">Register</Link></p>
                </div>
            </form>
        </div>
    )
}