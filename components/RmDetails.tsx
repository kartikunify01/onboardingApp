"use client";
import * as React from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Link from "next/link";
const steps = [
  {
    label: "Access & Induction",
    description: `Get started by completing your induction, basic set up & access`,
  },
  {
    label: "Policies & compliance",
    description:
      "Complete mandatory policy and security training to stay compliant with company standards",
  },
  {
    label: "Learning & enablement",
    description: "Build your core skills through guided basic courses",
  },
  {
    label: "Advanced training",
    description: "Build your core skills through guided advanced courses",
  },
  {
    label: "Successful Onboarding",
    description: "Readiness to contribute to live projects and client delivery",
  },
];
export default function RmDetails() {
  // const [activeStep, setActiveStep] = React.useState(0);

  // const handleNext = () => {
  //   setActiveStep((prevActiveStep) => prevActiveStep + 1);
  // };

  // const handleBack = () => {
  //   setActiveStep((prevActiveStep) => prevActiveStep - 1);
  // };

  // const handleReset = () => {
  //   setActiveStep(0);
  // };
  const [toggle,setToggle] = React.useState(true);
  function handleClick(){
    setToggle((state)=>!state);
  }
  return (
    <div className="flex-1 flex flex-col">
      <div className="flex flex-col bg-gradient-to-r from-[#7F62E5] to-[#27126F] p-6 rounded-t-3xl gap-2">
        <div className="text-2xl text-white font-extrabold">
          Reporting Manager Details
        </div>
        <div className="flex gap-2">
          <Image src={"/images/star.svg"} height={40} width={40} alt="star" />
          <div className="flex flex-col">
            <h1 className="text-white text-sm">Davda Harshit Deepak</h1>
            <h5 className="text-white text-sm">harshit.davda@unifyapps.com</h5>
          </div>
        </div>
      </div>
      <div className="flex flex-col flex-1 p-4 border border-t-0 rounded-b-3xl gap-6">
        <Stepper activeStep={3} orientation="vertical">
          {steps.map((step, index) => (
            <Step key={step.label}>
              <StepLabel
                sx={{
                  "& .MuiStepIcon-root": {
                    color: "#f0f0f0", // default
                  },
                  "& .MuiStepIcon-root.Mui-active": {
                    color: "#5c37eb",
                    fontSize: "26px",
                    border: "2px solid rgb(162, 174, 216)",
                    borderRadius: "999999px",
                  },
                  "& .MuiStepIcon-root.Mui-completed": {
                    color: "#5c37eb",
                  },
                  "& .MuiStepLabel-label": {
                    fontWeight: 700,
                  },
                  "& .MuiStepLabel-label.Mui-completed": {
                    fontWeight: 900,
                  },
                }}
              >
                {step.label}
              </StepLabel>
              <StepContent
                sx={{
                  "& .MuiTypography-root": {
                    fontSize: "14px",
                    fontWeight: 400,
                  },
                }}
              >
                <Typography>{step.description}</Typography>
              </StepContent>
            </Step>
          ))}
        </Stepper>
        <div className="flex flex-col bg-[#f7f6fe] rounded-2xl p-2" 
              onClick={handleClick}>
          <div className="flex rounded-2xl p-2">
            <div className="flex flex-1 justify-center items-center bg-[#f4f1fe] rounded-2xl">
              <Image
                src="images/channels.svg"
                height={55}
                width={50}
                alt="key_channel"
              />
              <span className="flex-1">Key Channels</span>
            </div>
            <Image
              src="images/rightChannel.svg"
              height={20}
              width={20}
              className={toggle ? "rotate-270" : ""}
              alt="drop"
            />
          </div>
          <div className={`flex flex-col gap-2 px-2 transition-all duration-300 ease-in-out overflow-hidden
              ${toggle ? "max-h-0 opacity-0 -translate-y-3" : "max-h-40 opacity-100 translate-y-0"}
            `}
          >
            <Link href="#" className="text-[#9f1ab1] text-sm bg-[#fdf4ff] w-fit px-2 py-1 rounded-xl">
              #frontend
            </Link>
            <Link href="#" className="text-[#9f1ab1] text-sm bg-[#fdf4ff] w-fit px-2 py-1 rounded-xl">
              #engineering
            </Link>
            <Link href="#" className="text-[#9f1ab1] text-sm bg-[#fdf4ff] w-fit px-2 py-1 rounded-xl">
              #pod-design-system
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
