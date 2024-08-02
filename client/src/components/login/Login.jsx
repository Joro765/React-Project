import { Link } from "react-router-dom";
import useForm from "../../hooks/useForm";

import styles from "../login/Login.module.css";
import { useContext } from "react";
import AuthContext from "../../contexts/authContext";


export default function Login() {

    const { loginSubmitHandler } = useContext(AuthContext);

    const { values, onChange, onSubmit } = useForm({ email: "", password: "" }, loginSubmitHandler);



    return (
        <div className={styles.formWrapper}>
            <h2 className={styles.formTitle}>Login</h2>
            <form onSubmit={onSubmit} className={styles.loginForm}>
                <div className={styles.inputs}>
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" id="email" value={values.email} onChange={onChange} placeholder="example@domain.com" />
                </div>
                <div className={styles.inputs}>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" value={values.password} onChange={onChange} placeholder="******" />
                </div>
                <div className={styles.buttons}>
                    <button type="submit">Login</button>
                    <p>Don't have an account? <Link className={styles.linkButton} to="/register">Register</Link></p>
                </div>
            </form>
        </div>
    )
}