import styled from "@emotion/styled";
import {
  Box,
  Divider,
  FormControl,
  InputAdornment,
  makeStyles,
  OutlinedInput,
  TextField,
} from "@mui/material";
import MuiTextField from "@mui/material/TextField";
import React from "react";

export default function WorkSpace() {
  return (
    <div>
      <FormControl className="body">
        <h1>Let's set up a home for all your work</h1>

        <h4 className="lighter">
          You can always create another workspace later
        </h4>

        <Box>
          <div className="tag">WorkSpace Name</div>

          <OutlinedInput
            style={{ width: "400px", margin: "5px" }}
            placeholder="Eden"
          />
          <div className="tag">
            Workspace URL <span className="lighter">(optional)</span>
          </div>

          <TextField
            style={{
              width: "400px",
              margin: "5px",
            }}
            placeholder="Example"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">www.eden.com/</InputAdornment>
              ),
            }}
          />

          {/* <OutlinedInput
            style={{ width: "400px", margin: "5px" }}
            placeholder="Example"
          /> */}
        </Box>
      </FormControl>
    </div>
  );
}
