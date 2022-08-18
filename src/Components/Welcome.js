import { Box, FormControl, OutlinedInput, TextField } from "@mui/material";
import React from "react";

export default function Welcome() {
  return (
    // <div>
    <FormControl className="body">
      <h1>Welcome! First thing first...</h1>

      <h4 className="lighter">You can always change them later.</h4>

      <Box>
        <div className="tag">Full Name</div>
        <TextField
          style={{ width: "400px", margin: "5px" }}
          className="input"
          placeholder="Steve Jobs"
        />
        <div className="tag">
          <div>Display Name</div>
        </div>

        <TextField
          style={{ width: "400px", margin: "5px" }}
          placeholder="Steve"
        />
      </Box>
    </FormControl>
    // </div>
  );
}
