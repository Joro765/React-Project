export default function Header() {
    return (
        <header className="site-header">
            <nav>
                <p class="logo"><a href="#">RecipeBook.</a></p>
                <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Recipes</a>
                    </li>
                    <li>
                        <a href="#">Register</a>
                    </li>
                    <li>
                        <a href="#">Login</a>
                    </li>
                </ul>
            </nav>
            <div className="banner">
                <h1>TASTY PASSION</h1>
                <h4>Learn how to make your favorite dishes.</h4>
            </div>
        </header>
    )
}