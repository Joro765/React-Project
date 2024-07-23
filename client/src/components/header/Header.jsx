import { useLocation } from 'react-router-dom';
import { Link } from "react-router-dom";


export default function Header() {
    const location = useLocation();


    return (
        <>
            {location.pathname === "/"
                ?
                <header className="site-header-home">
                    <nav>
                        <p className="logo"><Link to="/">RecipeBook.</Link></p>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/recipes">Recipes</Link>
                            </li>
                            <li>
                                <Link to="/register">Register</Link>
                            </li>
                            <li>
                                <Link to="/login">Login</Link>
                            </li>
                        </ul>
                    </nav>
                    <div className="banner">
                        <h1>TASTY PASSION</h1>
                        <h4>Learn how to make your favorite dishes.</h4>
                    </div>
                </header>
                :
                <header className="site-header">
                    <nav>
                        <p className="logo"><Link to="/">RecipeBook.</Link></p>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/recipes">Recipes</Link>
                            </li>
                            <li>
                                <Link to="/register">Register</Link>
                            </li>
                            <li>
                                <Link to="/login">Login</Link>
                            </li>
                        </ul>
                    </nav>
                </header>

            }
        </>
    )
}