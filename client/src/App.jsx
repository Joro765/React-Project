import { Routes, Route } from "react-router-dom";
import { AuthProvider } from './contexts/authContext';

import ScrollToTop from "./components/common/ScrollToTop";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Logout from "./components/logout/Logout";
import RecipeDetails from "./components/recipe/recipeDetails/RecipeDetails";
import Recipes from "./components/recipe/allRecipes/Recipes";
import CreateRecipe from "./components/recipe/createRecipe/CreateRecipe";
import Profile from "./components/profile/Profile";
import EditRecipe from "./components/recipe/editRecipe/EditRecipe";
import UserGuard from "./components/common/routeguards/UserGuard";
import GuestGuard from "./components/common/routeguards/GuestGuard";
import Wildcard from "./components/common/wildcard/Wildcard";


function App() {


  return (
    <AuthProvider>
      <div id="page-container">
        <Header />

        <main id="main-content">
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/recipes/:recipeId" element={<RecipeDetails />} />
            <Route path="/recipes/:recipeId/edit" element={<UserGuard><EditRecipe /></UserGuard>} />
            <Route path="/recipes/create" element={<UserGuard><CreateRecipe /></UserGuard>} />
            <Route path="/profile" element={<UserGuard><Profile /></UserGuard>} />
            <Route path="/login" element={<GuestGuard><Login /></GuestGuard>} />
            <Route path="/register" element={<GuestGuard><Register /></GuestGuard>} />
            <Route path="/logout" element={<Logout />} />
            <Route path="*" element={<Wildcard />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </AuthProvider>
  )
}

export default App
