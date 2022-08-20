import {
  Avatar,
  Button,
  FormControl,
  FormLabel,
  OutlinedInput,
  Radio,
  radioClasses,
  RadioGroup,
  TextField,
} from "@mui/material";
import Sheet from "@mui/joy/Sheet";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import { Person } from "@mui/icons-material";
// import PersonIcon from "@mui/icons-material/Person";
import GroupsIcon from "@mui/icons-material/Groups";
import React from "react";
import { Box } from "@mui/system";
import IconsRadio from "./radio";

export default function Purpose() {
  return (
    // <Box>
    <FormControl className="body">
      <h1>How are you planning to use Eden</h1>

      <h4 className="lighter">
        We'll streamline your setup experience accordingly.
      </h4>

      <IconsRadio />
    </FormControl>
    // </Box>
  );
}
