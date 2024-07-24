import { Link } from "react-router-dom";

import styles from "../login/Login.module.css"


export default function Login() {
    return (
        <div className={styles.formWrapper}>
            <form action="" className={styles.loginForm}>
                <h2>Login</h2>
                <div className={styles.inputs}>
                    <label htmlFor="">Email</label>
                    <input type="text" />
                </div>
                <div className={styles.inputs}>
                    <label htmlFor="">Password</label>
                    <input type="text" />
                </div>
                <div className={styles.buttons}>
                    <button>Login</button>
                    <p>Don't have an account? <Link to="/register">Register</Link></p>
                </div>
            </form>
        </div>
    )
}