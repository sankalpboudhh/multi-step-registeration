import { FormControl } from "@mui/material";
// import PersonIcon from "@mui/icons-material/Person";
import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Sheet } from "@mui/joy";
export default function Purpose() {
  return (
    // <Box>
    <FormControl className="body">
      <div>
        <Sheet sx={{ color: "#664de5" }}>
          <CheckCircleIcon className="circleCheck" />
        </Sheet>
      </div>

      <h1>Congratulations, Eren</h1>

      <h4 className="lighter">
        You have completed onboarding, you can start using Eden!
      </h4>
    </FormControl>
    // </Box>
  );
}
