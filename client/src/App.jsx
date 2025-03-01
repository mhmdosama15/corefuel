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

function App() {
  const location = useLocation();
  return (
    <>
      <div className={`flex flex-col   w-screen  h-full `}>
        <MaybeShowComponent>
          <Navbar />
        </MaybeShowComponent>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/exercise" element={<Exercise />} />
          <Route path="/exercise/create" element={<ExerciseForm />} />
          <Route path="/calories" element={<Calorie />} />
          <Route path="/food" element={<Food />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/form-check" element={<FormCheck />} />
          <Route path="/nutrition" element={<Nutrition />} />
          <Route path="/starter" element={<StarterPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup/username" element={<Username />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
