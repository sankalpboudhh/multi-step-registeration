import { Box, FormControl, OutlinedInput, TextField } from "@mui/material";
import React, { useState } from "react";

export default function Welcome() {
  const [name, setName] = useState();
  return (
    // <div>
    <FormControl className="body">
      <h1>Welcome! First thing first...</h1>

      <h4 className="lighter">You can always change them later.</h4>

      <Box>
        <div className="tag" value="firstname">
          Full Name
        </div>
        <TextField
          style={{ width: "400px", margin: "5px" }}
          className="input"
          value={name}
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
