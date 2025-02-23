import React, { useState } from "react";
import { Link } from "react-router-dom";
import StepName from "../pages/steps/StepName";
import StepGoals from "../pages/steps/StepGoals";
import StepStruggle from "../pages/steps/StepStruggle";
import StepSplit from "../pages/steps/StepSplit";
import StepPhase from "../pages/steps/StepPhase";
import StepActivity from "../pages/steps/StepActivity";
import StepProfile from "../pages/steps/StepProfile";
import StepMetrics from "../pages/steps/StepMetrics";

const StarterPage = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep((prev) => prev + 1);
  const previousStep = () => setStep((prev) => Math.max(1, prev - 1));
  return (
    <div className="flex flex-col gap-10 items-center justify-center h-screen border  w-full">
      <div className="flex flex-col min-h-[32rem] min-w-[32rem] max-w-[32rem] p-6 border border-[#dadada] justify-between items-center text-center rounded bg-[#efefef]">
        {step === 1 && <StepName />}
        {step === 2 && <StepGoals />}
        {step === 3 && <StepStruggle />}
        {step === 4 && <StepSplit />}
        {step === 5 && <StepPhase />}
        {step === 6 && <StepActivity />}
        {step === 7 && <StepProfile />}
        {step === 8 && <StepMetrics />}

        <div className="flex items-center gap-6 mt-6">
          <Link
            to={""}
            onClick={previousStep}
            className="border border-[#dadada] bg-white text-black px-4 py-2"
          >
            Back
          </Link>
          <Link
            to={`${step === 8 ? "/signup" : ""}`}
            onClick={nextStep}
            className="border border-[#dadada] bg-white text-black px-4 py-2"
          >
            Next
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StarterPage;
