import * as React from "react";
import Avatar from "@mui/joy/Avatar";
import FormLabel from "@mui/joy/FormLabel";
import Radio, { radioClasses } from "@mui/joy/Radio";
import RadioGroup from "@mui/joy/RadioGroup";
import Sheet from "@mui/joy/Sheet";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import { Person } from "@mui/icons-material";
import GroupsIcon from "@mui/icons-material/Groups";
import { red } from "material-ui-colors";

export default function IconsRadio() {
  const [checked, setChecked] = React.useState("false");

  return (
    <RadioGroup
      aria-label="platform"
      defaultValue="Website"
      overlay
      name="platform"
      //   onChange={setChecked(event.target.value)}
      sx={{
        flexDirection: "row",
        gap: 2,
        [`& .${radioClasses.checked}`]: {
          [`& .${radioClasses.action}`]: {
            inset: -1,
            border: "3px solid",
            borderColor: "#664de5",
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
          alignItems: "left",
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
      </Sheet>
      <Sheet
        key={2}
        variant="outlined"
        sx={{
          borderRadius: "md",
          bgcolor: "background.level1",
          display: "flex",
          flexDirection: "column",
          alignItems: "left",
          gap: 1.5,
          p: 2,
          minWidth: 120,
          maxWidth: 170,
        }}
      >
        <Radio id={"team"} value={"team"} />

        <GroupsIcon />
        <div>
          <h3>With my team</h3>

          <p className="lighter">
            Wikis, docs, task & projects, all in one place.
          </p>
        </div>
      </Sheet>
    </RadioGroup>
  );
}

/////////
{
  /* <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="PersonIcon"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path></svg> */
}
//////
