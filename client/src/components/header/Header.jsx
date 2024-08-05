import { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from "react-router-dom";
import AuthContext from '../../contexts/authContext';


export default function Header() {
    const location = useLocation();

    const { isAuthenticated } = useContext(AuthContext);


    return (
        <>
            {location.pathname === "/"
                ?
                <header className="site-header-home">
                    <nav>
                        <p className="logo"><Link to="/">RecipeBook.</Link></p>
                        {isAuthenticated && (<ul>
                            <li>
                                <Link to="/recipes">Recipes</Link>
                            </li>
                            <li>
                                <Link to="/recipes/create">Create</Link>
                            </li>
                            <li>
                                <Link to="/profile">Profile</Link>
                            </li>
                            <li>
                                <Link to="/logout">Logout</Link>
                            </li>
                        </ul>)}

                        {!isAuthenticated && (<ul>
                            <li>
                                <Link to="/recipes">Recipes</Link>
                            </li>
                            <li>
                                <Link to="/register">Register</Link>
                            </li>
                            <li>
                                <Link to="/login">Login</Link>
                            </li>
                        </ul>)}

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
                        {isAuthenticated && (<ul>
                            <li>
                                <Link to="/recipes">Recipes</Link>
                            </li>
                            <li>
                                <Link to="/recipes/create">Create</Link>
                            </li>
                            <li>
                                <Link to="/profile">Profile</Link>
                            </li>
                            <li>
                                <Link to="/logout">Logout</Link>
                            </li>
                        </ul>)}

                        {!isAuthenticated && (<ul>
                            <li>
                                <Link to="/recipes">Recipes</Link>
                            </li>
                            <li>
                                <Link to="/register">Register</Link>
                            </li>
                            <li>
                                <Link to="/login">Login</Link>
                            </li>
                        </ul>)}
                    </nav>
                </header>

            }
        </>
    )
}