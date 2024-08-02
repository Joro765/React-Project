import { Link } from "react-router-dom";
import useForm from "../../hooks/useForm";

import styles from "../register/Register.module.css";
import { useContext } from "react";
import AuthContext from "../../contexts/authContext";


export default function Register() {

    const { registerSubmitHandler } = useContext(AuthContext);

    const { values, onChange, onSubmit } = useForm({ email: "", password: "", rePassword: "" }, registerSubmitHandler);



    return (
        <div className={styles.formWrapper}>
            <h2 className={styles.formTitle}>Register</h2>
            <form onSubmit={onSubmit} className={styles.registerForm}>
                <div className={styles.inputs}>
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" id="email" value={values.email} onChange={onChange} placeholder="example@domain.com" />
                </div>
                <div className={styles.inputs}>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" value={values.password} onChange={onChange} placeholder="******" />
                </div>
                <div className={styles.inputs}>
                    <label htmlFor="rePassword">Confirm Password</label>
                    <input type="password" name="rePassword" id="rePassword" value={values.rePassword} onChange={onChange} placeholder="******" />
                </div>
                <div className={styles.buttons}>
                    <button type="submit">Register</button>
                    <p>Already have an account? <Link className={styles.linkButton} to="/login">Login</Link></p>
                </div>
            </form>
        </div>
    )
}