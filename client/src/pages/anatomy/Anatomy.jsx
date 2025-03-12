import React, { useEffect, useState } from "react";
import PictureTwo from "../../assets/images/pic2.jpg";
import { Link, useParams } from "react-router-dom";
import { FaPlay } from "react-icons/fa";
const Anatomy = ({}) => {
  const { id } = useParams();
  const [exerciseData, setExerciseData] = useState({});

  const fetchExerciseDetails = () => {
    try {
      const storedExerciseData = JSON.parse(localStorage.getItem("exercises"));
      if (storedExerciseData) {
        const foundExercise = storedExerciseData.find(
          (e) => e._id.toString() === id.toString()
        );
        if (foundExercise) {
          setExerciseData(foundExercise);
          console.log("found exercise", foundExercise);
        }
      }
    } catch (error) {
      console.log("couldnt find matching ID", error);
    }
  };

  useEffect(() => {
    fetchExerciseDetails();
  }, [id]);

  return (
    <div className="flex flex-col items-center px-6 lg:px-30 pb-20 lg:pb-30  gap-4 pt-10 lg:pt-44">
      <h2 className="text-2xl">{exerciseData.title}</h2>
      <div className="flex flex-col lg:flex-row lg:justify-between gap-10 mt-10">
        <div className="p-6 bg-white  shadow-sm border h-96 overflow-hidden border-[#dadada] rounded">
          <div className="relative">
            <img
              src={`https://lh3.googleusercontent.com/d/${exerciseData.videoUrlID}=s600`}
              alt={exerciseData.title}
              className="w-full h-full relative border group transition duration-300 object-cover rounded-lg"
              loading="lazy"
            />
            <div className="absolute top-40 left-2/4">
              <Link
                to={`https://drive.google.com/file/d/${exerciseData.videoUrlID}/view`}
                target="_blank"
                rel="noopener noreferrer"
                className="border bg-white group-hover:scale-105 rounded"
              >
                <FaPlay className="text-white text-2xl" />
              </Link>
            </div>
          </div>
        </div>
        <div className="p-6 bg-white shadow-sm border h-96 overflow-scroll hide-scrollbar border-[#dadada] rounded">
          <h2 className="text-lg font-semibold">{exerciseData.title}</h2>
          <p className="text-gray-600">
            Category: <span>{exerciseData.subCategory}</span>
          </p>

          <h3 className="mt-4 font-medium">Steps:</h3>
          <ul className="list-disc pl-5 flex flex-col gap-2">
            {exerciseData.description?.split(". ").map((step, index) => (
              <li key={index}>
                <strong>{step.split(": ")[0]}:</strong> {step.split(": ")[1]}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Anatomy;
