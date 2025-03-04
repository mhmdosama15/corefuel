import "./App.css";
import StarterPage from "./components/StarterPage";
import { Link, useLocation } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import SignUp from "./pages/register/SignUp";
import Username from "./pages/register/Username";
import Home from "./pages/Home";
import MaybeShowComponent from "./components/MaybeShowComponent";
import Dashboard from "./pages/Dashboard";
import Exercise from "./pages/Exercise";
import Calorie from "./pages/Calorie";
import Nutrition from "./pages/Nutrition";
import ExerciseForm from "./pages/ExerciseForm";
import Food from "./pages/Food";
import Settings from "./pages/Settings";
import Login from "./pages/Login";
import FormCheck from "./pages/FormCheck";
import AnatomyLayout from "./pages/anatomy/AnatomyLayout";
import Anatomy from "./pages/anatomy/Anatomy";
import BodyAnatomy from "./pages/anatomy/BodyAnatomy";
import ScrollToTop from "./components/ScrollToTop";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setAuth, setToken, setUser } from "./redux/authSlice";
import axios from "axios";
import { BACKEND_URL } from "./utils";

function App() {
  const dispatch = useDispatch();
  const token = localStorage.getItem("auth_token");
  const authenticateUser = async () => {
    if (!token) return;
    try {
      const response = await axios.get(`${BACKEND_URL}/api/auth/user-data`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (response.status === 200) {
        dispatch(setUser(response.data.user));
        dispatch(response.data.token ? setAuth(true) : setAuth(false));
        dispatch(setToken(response.data.token));
        localStorage.setItem("auth_token", response.data.token);
      }
    } catch (error) {
      console.log("Authentication failed", error);
      dispatch(setAuth(false));
      dispatch(setToken(null));
    }
  };
  useEffect(() => {
    authenticateUser();
  }, [dispatch, token]);
  return (
    <>
      <div className={`flex flex-col   w-screen  h-full `}>
        <ScrollToTop />
        <MaybeShowComponent>
          <Navbar />
        </MaybeShowComponent>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/exercise" element={<Exercise />} />
          <Route path="/exercise/create" element={<ExerciseForm />} />
          <Route path="/body-anatomy" element={<BodyAnatomy />} />
          <Route path="/anatomy/chest" element={<AnatomyLayout />} />
          <Route path="/anatomy" element={<Anatomy />} />
          <Route path="/calories" element={<Calorie />} />
          <Route path="/food" element={<Food />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/form-check" element={<FormCheck />} />
          <Route path="/nutrition" element={<Nutrition />} />
          <Route path="/starter/*" element={<StarterPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup/username" element={<Username />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
