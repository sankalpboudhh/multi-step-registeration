import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
// @material-ui/core components
import LinearProgress from "@mui/material/LinearProgress";
import { withStyles } from "@mui/styles";

const progressStepperStyle = {
  stepper: {
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "space-around",
    padding: 0,
    width: "100%",
  },

  stepper__step: {
    position: "relative",
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "space-around",
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
  },

  stepper__step__label: {
    color: "#999",
    margin: 0,
  },

  labelContainer: {
    display: "flex",
    flexFlow: "column nowrap",
    alignItems: "center",
  },

  linearProgress: {
    flex: "1 1 auto",
    position: "absolute",
    top: 12,
    left: "calc(-50% + 20px)",
    right: "calc(50% + 20px)",
    backgroundColor: "#ffd8ba61",
  },

  bar: {
    backgroundColor: "#664de5",
  },

  currentStep: {
    backgroundColor: "#664de5 !important",
    color: "#fff",
    fontWeight: "500",
  },

  done: {
    backgroundColor: "#664de5 !important",
    color: "#fff",
    fontWeight: "500",
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
          <p className={classes.stepper__step__label}>{label}</p>
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
