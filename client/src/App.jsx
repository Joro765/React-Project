import { Routes, Route, useNavigate } from "react-router-dom";
import { useState } from "react";
import AuthContext from "./contexts/authContext";


import ScrollToTop from "./components/common/ScrollToTop";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Logout from "./components/logout/Logout";
import RecipeDetails from "./components/recipe/recipeDetails/RecipeDetails";
import { login, register } from "./api/auth-api";


function App() {
  const navigate = useNavigate();
  const [auth, setAuth] = useState({});


  async function loginSubmitHandler(values) {
    try {
      const userData = await login(values.email, values.password);
      setAuth(userData);
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  }



  async function registerSubmitHandler(values) {
    try {
      const userData = await register(values.email, values.password);
      setAuth(userData);
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  }



  function logoutHandler() {
    setAuth({});
  }


  const values = {
    loginSubmitHandler,
    registerSubmitHandler,
    logoutHandler,
    email: auth.email,
    isAuthenticated: !!auth.accessToken,
    accessToken: auth.accessToken
  }




  return (
    <AuthContext.Provider value={values}>
      <div id="page-container">
        <Header />

        <main id="main-content">
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recipes/:recipeId" element={<RecipeDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/logout" element={<Logout />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </AuthContext.Provider>
  )
}

export default App
