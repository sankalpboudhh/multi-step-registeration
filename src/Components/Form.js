import React, { useState } from "react";
import { Button, FormControl, OutlinedInput, Paper } from "@mui/material";
import WorkSpace from "./WorkSpace";
import Purpose from "./Purpose";
import OnBoard from "./OnBoard";
import Welcome from "./Welcome";
import { Box } from "@mui/system";

export default function Form() {
  const [page, setPage] = useState(0);

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
      …{/* // <FormControl className="form"> */}
      {/* <FormControl className="form"> */}
      {/* <div className="progressbar"> */}
      <h1 className="heading">Eden</h1>
      <div className="body">{DisplayPage()}</div>
      <div className="footer">
        <Button
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
          Create Workspace
        </Button>{" "}
      </div>
      {/* </div> */}
      {/* </FormControl> */}
      {/* </FormControl> */}
    </Box>
  );
}
