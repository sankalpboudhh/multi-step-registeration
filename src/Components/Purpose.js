import { FormControl, OutlinedInput } from "@mui/material";
import React from "react";

export default function Purpose() {
  return (
    <div>
      <FormControl className="body">
        <div className="progressbar"></div>
        <div>
          <h1>Welcome! Test sasdasdasdsadds teste</h1>
        </div>
        <div>
          <h4 className="lighter sub-heading">
            You can always change them later.
          </h4>
        </div>
        <div>
          <span>Full Name</span>
        </div>
        <div className="content">
          <OutlinedInput
            style={{
              alignItems: "center",

              //   margin: "5px ",
              maxWidth: "400px",
              minWidth: "400px",
            }}
            placeholder="Steve Jobs"
          />
        </div>
        <div>
          <div>Display Name</div>
          <div className="content">
            <OutlinedInput
              style={{
                alignItems: "center",

                maxWidth: "400px",
                minWidth: "400px",
              }}
              placeholder="Steve"
            />
          </div>
        </div>
      </FormControl>
    </div>
  );
}
