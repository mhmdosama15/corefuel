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
import { useDispatch, useSelector } from "react-redux";
import { setAuth, setToken, setUser } from "./redux/authSlice";
import axios from "axios";
import { BACKEND_URL } from "./utils";
import ProtectedRoute from "./pages/ProtectedRoute";

function App() {
  const dispatch = useDispatch();
  const authenticateUser = async () => {
    const token = localStorage.getItem("token");
    if (!token) return;
    try {
      const response = await axios.get(`${BACKEND_URL}/api/auth`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.status === 200) {
        dispatch(setAuth(true));
        dispatch(setUser(response.data.user));
      }
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    authenticateUser();
  }, []);
  return (
    <>
      <div className={`flex flex-col   w-screen  h-full `}>
        <ScrollToTop />
        <MaybeShowComponent>
          <Navbar />
        </MaybeShowComponent>
        <Routes>
          {/*  */}
          <Route path="/" element={<Home />} />
          <Route path="/starter/*" element={<StarterPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />

          {/* Protected Routes  */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/exercise"
            element={
              <ProtectedRoute>
                <Exercise />
              </ProtectedRoute>
            }
          />
          <Route
            path="/exercise/create"
            element={
              <ProtectedRoute>
                <ExerciseForm />
              </ProtectedRoute>
            }
          />
          <Route
            path="/body-anatomy"
            element={
              <ProtectedRoute>
                <BodyAnatomy />
              </ProtectedRoute>
            }
          />
          <Route
            path="/anatomy/:category"
            element={
              <ProtectedRoute>
                <AnatomyLayout />
              </ProtectedRoute>
            }
          />
          <Route
            path="/anatomy/details/:id"
            element={
              <ProtectedRoute>
                <Anatomy />
              </ProtectedRoute>
            }
          />
          <Route
            path="/calories"
            element={
              <ProtectedRoute>
                <Calorie />
              </ProtectedRoute>
            }
          />
          <Route
            path="/food"
            element={
              <ProtectedRoute>
                <Food />
              </ProtectedRoute>
            }
          />
          <Route
            path="/settings"
            element={
              <ProtectedRoute>
                <Settings />
              </ProtectedRoute>
            }
          />
          <Route
            path="/form-check"
            element={
              <ProtectedRoute>
                <FormCheck />
              </ProtectedRoute>
            }
          />
          <Route
            path="/nutrition"
            element={
              <ProtectedRoute>
                <Nutrition />
              </ProtectedRoute>
            }
          />

          <Route
            path="/signup/username"
            element={
              <ProtectedRoute>
                <Username />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
