import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import StarterPage from "./components/StarterPage";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <div className="flex flex-col items-center justify-center 2xl:mx-auto 2xl:container w-screen h-screen">
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <StarterPage>
                  <div className="flex flex-col justify-between items-center h-full text-center gap-2">
                    <div className="flex items-center gap-6">
                      <Link
                        to={""}
                        className="border border-[#dadada] bg-white text-black px-4 py-2"
                      >
                        Back
                      </Link>
                      <Link
                        to={""}
                        className="border border-[#dadada] bg-white text-black px-4 py-2"
                      >
                        Next
                      </Link>
                    </div>
                  </div>
                </StarterPage>
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
