import { Link } from "react-router-dom";

import styles from "../register/Register.module.css"


export default function Register() {
    return (
        <div className={styles.formWrapper}>
            <form action="" className={styles.registerForm}>
                <h2>Register</h2>
                <div className={styles.inputs}>
                    <label htmlFor="">Email</label>
                    <input type="text" />
                </div>
                <div className={styles.inputs}>
                    <label htmlFor="">Password</label>
                    <input type="text" />
                </div>
                <div className={styles.inputs}>
                    <label htmlFor="">Confirm Password</label>
                    <input type="text" />
                </div>
                <div className={styles.buttons}>
                    <button>Register</button>
                    <p>Already have an account? <Link to="/login">Login</Link></p>
                </div>
            </form>
        </div>
    )
}