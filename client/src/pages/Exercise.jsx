import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "../utils";
import { FaEdit, FaTrash } from "react-icons/fa";
import { setNoteState } from "../redux/userSlice";
const Exercise = () => {
  const today = new Date().toISOString().slice(0, 10);
  const token = useSelector((state) => state.auth.token);
  const [exercises, setExercises] = useState([]);
  const [enabled, setEnabled] = useState(false);
  const savedNote = useSelector((state) => state.user.note || "");
  const [note, setNote] = useState(savedNote);
  const dispatch = useDispatch();
  const getUserExercises = async () => {
    try {
      const response = await axios.get(
        `${BACKEND_URL}/api/user/get-exercises`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      console.log(response.data);
      if (response.status === 200) {
        setExercises(response.data.userExercises);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const deleteExercise = async (exerciseId) => {
    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/user/delete-exercise`,
        {
          exerciseId,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      console.log(response.data);
      if (response.status === 200) {
        getUserExercises();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const toggleEdit = () => {
    if (enabled) {
      dispatch(setNoteState(note));
    }
    setEnabled(!enabled);
  };
  useEffect(() => {
    getUserExercises();
  }, []);
  return (
    <div className="flex flex-col px-6 lg:px-30 pb-30 gap-6 pt-10 lg:pt-24">
      <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-center border-b border-b-[#dadada] pb-10 lg:gap-20">
        <p>Your exercise dairy for: </p>
        <div>{today}</div>
        <div className="flex flex-col text-sm">
          <label htmlFor="date">Check date</label>
          <input type="date" id="date" className="border px-4 py-2" />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-start border-b border-b-[#dadada] gap-6 pb-10 lg:gap-44">
        <div className="flex flex-col gap-4">
          <p>Exercises</p>
          <Link
            to={"/exercise/create"}
            className="border text-nowrap border-[#dadada] px-4 py-2 hover:bg-blue-700 bg-blue-500 text-white"
          >
            Add Exercise
          </Link>
        </div>
        <div className="w-full overflow-scroll">
          <table className="w-full border-collapse border border-gray-900">
            <thead>
              <tr className="bg-blue-500 text-white">
                <th className="border px-4 py-2"></th>
                <th className="border px-4 py-2">Exercise Name</th>
                <th className="border px-4 py-2">Exercise Type</th>
                <th className="border px-4 py-2">Minutes</th>
                <th className="border px-4 py-2">Calories Burned</th>
                <th className="border px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {exercises.map((exercise, index) => (
                <tr key={index} className="text-center">
                  <td className="border px-4 py-2">{index + 1}</td>
                  <td className="border px-4 py-2">{exercise.exerciseName}</td>
                  <td className="border px-4 py-2">{exercise.exerciseType}</td>
                  <td className="border px-4 py-2">
                    {exercise.exerciseDuration}
                  </td>
                  <td className="border px-4 py-2">
                    {exercise.caloriesBurned}
                  </td>
                  {/* <td className="border px-4 py-2">
                  {new Date(exercise.createdAt).toLocaleDateString()}
                </td> */}
                  <td className="border flex items-center justify-center gap-2 py-2">
                    <Link to={`/exercise/${exercise._id}`}>
                      <FaEdit className="text-xl" />
                    </Link>
                    <button onClick={() => deleteExercise(exercise._id)}>
                      <FaTrash className="text-red-500" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* <div className="grid grid-cols-2 text-center gap-1  ">
          <div className="border rounded bg-blue-500 text-white text-center px-4 py-1">
            <p> Minutes</p>
          </div>
          <div className="border rounded bg-blue-500 text-white text-center px-4 py-1">
            <p> Calories Burned</p>
          </div>
          <p className="border px-4 py-1 rounded">1</p>
          <p className="border px-4 py-1 rounded">100</p>
        </div> */}
      </div>
      {/* <div className="flex flex-col lg:flex-row items-start border-b border-b-[#dadada] gap-6 pb-10 lg:gap-44">
        <div className="flex flex-col gap-4">
          <p>Strength Training</p>
          <Link
            to={"/exercise/create"}
            className="border border-[#dadada] px-4 py-2 hover:bg-blue-700 bg-blue-500 text-white"
          >
            Add Exercise
          </Link>
        </div>
        <div className="grid grid-cols-3 text-center  gap-1">
          <div className="border rounded bg-blue-500 text-white text-center px-4 py-1">
            <p> Sets</p>
          </div>
          <div className="border rounded bg-blue-500 text-white text-center px-4 py-1">
            <p> Reps/Set</p>
          </div>
          <div className="border rounded bg-blue-500 text-white text-center px-4 py-1">
            <p> Weight/Set</p>
          </div>
          <p className="border px-4 py-1 rounded">1</p>
          <p className="border px-4 py-1 rounded">100</p>
          <p className="border px-4 py-1 rounded">1</p>
        </div>
      </div> */}
      <div className="flex flex-col gap-4">
        <p>Today's Exercise Notes</p>
        <div className="flex justify-end">
          <button
            onClick={toggleEdit}
            className="border cursor-pointer border-[#dadada] px-4 py-2 hover:bg-blue-700 bg-blue-500 text-white"
          >
            {enabled ? "Save Note" : "Edit Note"}
          </button>
        </div>
        <div className="border min-h-44 max-h-full border-[#dadada]">
          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            disabled={!enabled}
            className="h-full w-full px-4 py-2"
          />
        </div>
      </div>
    </div>
  );
};

export default Exercise;
