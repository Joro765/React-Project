import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import styles from "../login/Login.module.css"


export default function Login() {
    const [user, setUser] = useState({
        email: "",
        password: "",
    });


    function formSubmitHandler(e) {
        e.preventDefault();
        console.log("Form Submitted!");
        console.log(user);
    }

    function changeHandler(e) {
        setUser(oldUser => ({ ...oldUser, [e.target.name]: e.target.value }));
    }


    return (
        <div className={styles.formWrapper}>
            <form onSubmit={formSubmitHandler} className={styles.loginForm}>
                <h2>Login</h2>
                <div className={styles.inputs}>
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" id="email" value={user.email} onChange={changeHandler} placeholder="example@domain.com" />
                </div>
                <div className={styles.inputs}>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" value={user.password} onChange={changeHandler} placeholder="******" />
                </div>
                <div className={styles.buttons}>
                    <button type="submit">Login</button>
                    <p>Don't have an account? <Link to="/register">Register</Link></p>
                </div>
            </form>
        </div>
    )
}