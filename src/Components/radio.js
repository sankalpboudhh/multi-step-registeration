import * as React from "react";
import Avatar from "@mui/joy/Avatar";
import FormLabel from "@mui/joy/FormLabel";
import Radio, { radioClasses } from "@mui/joy/Radio";
import RadioGroup from "@mui/joy/RadioGroup";
import Sheet from "@mui/joy/Sheet";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import { Person } from "@mui/icons-material";
import GroupsIcon from "@mui/icons-material/Groups";

export default function IconsRadio() {
  return (
    <RadioGroup
      className="radiosan"
      aria-label="platform"
      defaultValue="Website"
      overlay
      name="platform"
      sx={{
        flexDirection: "row",
        gap: 2,
        [`& .${radioClasses.checked}`]: {
          [`& .${radioClasses.action}`]: {
            inset: -1,
            border: "3px solid",
            borderColor: "primary.500",
          },
        },
        [`& .${radioClasses.radio}`]: {
          display: "contents",
          "& > svg": {
            zIndex: 2,
            position: "absolute",
            top: "-8px",
            right: "-8px",
            bgcolor: "background.body",
            borderRadius: "50%",
          },
        },
      }}
    >
      <Sheet
        key={1}
        variant="outlined"
        sx={{
          borderRadius: "md",
          bgcolor: "background.level1",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 1.5,
          p: 2,
          minWidth: 120,
          maxWidth: 170,
        }}
      >
        <Radio id={"self"} value={"self"} />
        <Person />
        <div>
          <h3>For myself</h3>
          <p className="lighter">
            Write better. Think more clearly, Stay organized.
          </p>
        </div>
        {/* <FormLabel htmlFor={"self"}>
          <h3>For myself</h3>
        </FormLabel>
        <FormLabel>
          <p>Write better. Think more clearly, Stay organized.</p>
        </FormLabel> */}
      </Sheet>
      <Sheet
        key={2}
        variant="outlined"
        sx={{
          borderRadius: "md",
          bgcolor: "background.level1",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 1.5,
          p: 2,
          minWidth: 120,
          maxWidth: 170,
        }}
      >
        <Radio id={"team"} value={"team"} />
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            flexWrap: "wrap",
            color: "red",
          }}
        >
          <GroupsIcon />
        </div>
        <div>
          <h3>With my team</h3>

          <p className="lighter">
            Wikis, docs, task & projects, all in one place.
          </p>
        </div>
        {/* <FormLabel htmlFor={"self"}>
          <h3>With my team</h3>
          <p className="lighter">
            {" "}
            Wikis, docs, task & projects, all in one place.
          </p>
        </FormLabel> */}
      </Sheet>
    </RadioGroup>
  );
}
