import { Link } from "react-router-dom";
import useForm from "../../hooks/useForm";

import styles from "../register/Register.module.css";
import { useContext } from "react";
import AuthContext from "../../contexts/authContext";


export default function Register() {

    const { registerSubmitHandler } = useContext(AuthContext);

    const { values, onChange, onSubmit, errors, submitError } = useForm({ email: "", password: "", rePassword: "" }, registerSubmitHandler, validate);


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
        } else if (!values.rePassword) {
            errors.rePassword = "Password is required";
        } else if (values.password != values.rePassword) {
            errors.rePassword = "Passwords should match";
        }

        return errors;
    };



    return (
        <div className={styles.formWrapper}>
            <h2 className={styles.formTitle}>Register</h2>
            <form onSubmit={onSubmit} className={styles.registerForm}>
                <div className={styles.inputs}>
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" id="email" value={values.email} onChange={onChange} placeholder="example@domain.com" />
                    {errors.email && <p className="error">{errors.email}</p>}
                </div>
                <div className={styles.inputs}>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" value={values.password} onChange={onChange} placeholder="******" />
                    {errors.password && <p className="error">{errors.password}</p>}
                </div>
                <div className={styles.inputs}>
                    <label htmlFor="rePassword">Confirm Password</label>
                    <input type="password" name="rePassword" id="rePassword" value={values.rePassword} onChange={onChange} placeholder="******" />
                    {errors.rePassword && <p className="error">{errors.rePassword}</p>}
                </div>
                <div className={styles.buttons}>
                    <button type="submit">Register</button>
                    {submitError && <p className="error">{submitError}</p>}
                    <p>Already have an account? <Link className={styles.linkButton} to="/login">Login</Link></p>
                </div>
            </form>
        </div>
    )
}