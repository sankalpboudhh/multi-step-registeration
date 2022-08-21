import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
// @material-ui/core components
import LinearProgress from "@mui/material/LinearProgress";
import { withStyles } from "@mui/styles";
import { Box } from "@mui/material";
import { maxWidth } from "@mui/system";

const progressStepperStyle = {
  stepper: {
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "center",
    // paddingLeft: "350px",
    paddingLeft: "22rem",
    paddingRight: "22rem",
    width: "50%",
    position: "relative",
  },

  stepper__step: {
    position: "relative",
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },

  stepper__step__index: {
    width: "30px",
    height: "30px",
    lineHeight: "30px",
    borderRadius: "50%",
    background: "#dedede",
    color: "#999",
    textAlign: "center",
    marginBottom: "5px",
    position: "absolute",
    zIndex: "1",
  },

  //   labelContainer: {
  //     display: "flex",
  //     flexFlow: "column nowrap",
  //     alignItems: "center",
  //   },

  linearProgress: {
    flex: "1 0 0",
    position: "absolute",
    top: 12,
    left: "calc(-50% + 20px)",
    right: "calc(50% + 20px)",
    // backgroundColor: "#664de5 !important",
  },

  bar: {
    backgroundColor: "#664de5 !important",
    color: "#664de5",
    // position: "absolute",
  },

  currentStep: {
    backgroundColor: "#664de5 !important",
    color: "#fff",
    fontWeight: "500",
    // position: "absolute",
  },

  done: {
    backgroundColor: "#664de5 !important",
    color: "#fff",
    fontWeight: "500",
    // position: "absolute",
  },
};

function ProgressStepper(props) {
  const { steps, current, progress, classes } = props;

  function StepContent({ done, index }) {
    return index + 1;
  }

  const ProgressBar = ({ current, step, progress }) => {
    let value = 0;
    if (current + 1 === step) {
      value = progress;
    } else if (current >= step) {
      value = 100;
    }

    return (
      <LinearProgress
        variant="determinate"
        value={value}
        classes={{ root: classes.linearProgress, bar: classes.bar }}
        style={{
          position: "absolute",
          justifyContent: "center",
        }}
      />
    );
  };

  function renderStep(label, key) {
    const { current, progress } = this;
    const done = key < current;
    const currentStep = key === current;
    const stepClasses = classNames({
      [classes.stepper__step__index]: true,
      [classes.currentStep]: currentStep,

      [classes.done]: done,
    });

    return (
      <li className={classes.stepper__step} key={key}>
        <div className={classes.labelContainer}>
          <span className={stepClasses}>
            <StepContent done={done} index={key} />
          </span>
          {/* <p className={classes.stepper__step__label}>{label}</p> */}
        </div>
        {!!key && (
          <ProgressBar current={current} step={key} progress={progress} />
        )}
      </li>
    );
  }

  return (
    <ul className={classes.stepper}>
      {steps.map(renderStep, { current, progress })}
    </ul>
  );
}

ProgressStepper.propTypes = {
  classes: PropTypes.object.isRequired,
  steps: PropTypes.array.isRequired,
  current: PropTypes.number.isRequired,
  progress: PropTypes.number,
};

export default withStyles(progressStepperStyle)(ProgressStepper);

///
