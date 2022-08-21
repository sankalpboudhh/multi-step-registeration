import React, { useState } from "react";
import { Button, FormControl, OutlinedInput, Paper } from "@mui/material";
import WorkSpace from "./WorkSpace";
import Purpose from "./Purpose";
import OnBoard from "./OnBoard";
import Welcome from "./Welcome";
import { Box } from "@mui/system";
import ProgressStepper from "./ProgressStepper";
import logo from "./EdenLogo.png";

export default function Form() {
  const [page, setPage] = useState(0);
  /////////////////////////////////////////////////////////////////////
  //   const steps = ["Label 1", "Label 2", "Label 3", "Label 4"];

  //   const [activeStep, setActiveStep] = React.useState(0);
  //   const [progress, setProgress] = React.useState(50);

  //   const handleNext = () => {
  //     // progress < 100 ? setProgress((prev) => prev + 150) : nextStep();
  //     setProgress((prev) => prev + 200);
  //     nextStep();
  //   };

  //   const nextStep = () => {
  //     setProgress(0);
  //     setActiveStep((prev) => prev + 1);
  //   };
  /////////////////////////////////////////////////////////////////////
  //   const FormStage = ["Welcome", "WorkSpace", "Purpose", "OnBoard"];

  const handleClick = () => {
    setPage((curr) => curr + 1);
  };
  const DisplayPage = () => {
    if (page === 0) {
      return <Welcome />;
    } else if (page === 1) {
      return <WorkSpace />;
    } else if (page === 2) {
      return <Purpose />;
    } else {
      return <OnBoard />;
    }
  };

  return (
    <Box sx={{ justifyContent: "center" }}>
      <div>
        <h1 className="heading">
          <img src={logo} alt={"logo"} width="50" height="50"></img>Eden
        </h1>
      </div>
      {/* //////////////////////////////////////////////////////////////////// */}
      {/* <div>
        <ProgressStepper
          steps={steps}
          current={activeStep}
          progress={progress}
        />
        <div>
          <Button variant="contained" color="primary" onClick={handleNext}>
            {activeStep === steps.length - 1 ? "Finish" : "Next"}
          </Button>
        </div>
      </div> */}
      {/* //////////////////////////////////////////////////////////////////////// */}
      <div className="body">{DisplayPage()}</div>
      <div className="footer">
        <Button
          type="submit"
          style={{
            backgroundColor: "#664de5",
            alignItems: "center",
            minHeight: "45px",
            minWidth: "400px",
            marginTop: "20px",
            textTransform: "none",
          }}
          variant="contained"
          onClick={handleClick}
        >
          {page === 3 ? "Launch Eden" : "Create Workspace"}
          {/* Create Workspace */}
        </Button>{" "}
      </div>
    </Box>
  );
}
