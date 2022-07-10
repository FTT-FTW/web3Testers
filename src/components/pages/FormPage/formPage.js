import React, { useState } from "react";
import {
  Card,
  CardContent,
  TextField,
  Button,
  Stepper,
  StepLabel,
  Step,
  Stack,
} from "@mui/material";
import "./formPage.css";
import { FormContent } from "./formContent";
import { ReactComponent as MetaMask } from "../../../assets/Metamask.svg";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Link } from "react-router-dom";

export const FormPage = () => {
  const [activeStep, setActiveStep] = useState(0);

  function renderContent() {
    switch (activeStep) {
      case 0:
        return (
          <FormContent>
            <Button
              variant="outlined"
              sx={{
                textTransform: "unset",
                color: "black",
                backgroundColor: "white",
              }}
            >
              <div className="flexCont">
                Connect Wallet
                <MetaMask className="metaIcon" />
              </div>
            </Button>
          </FormContent>
        );
      case 1:
        return (
          <FormContent>
            <Button
              variant="outlined"
              sx={{
                textTransform: "unset",
                color: "black",
                backgroundColor: "white",
              }}
            >
              <div className="flexCont">
                Connect Twitter
                <TwitterIcon className="twitterIcon" />
              </div>
            </Button>
          </FormContent>
        );
      case 2:
        return (
          <FormContent>
            <TextField
              sx={{
                backgroundColor: "white",
                width: "70%",
              }}
              id="outlined-basic"
              label="Email"
              variant="outlined"
              type="email"
            />
          </FormContent>
        );
    }
  }

  const nextStep = () => {
    if (activeStep == 2) return;
    setActiveStep(activeStep + 1);
  };

  return (
    <div className="container">
      <Link to="/">
        <span className="testersTitle"> web3testers </span>
      </Link>

      <div className="waitlistContainer">
        <Card
          sx={{ backgroundColor: "rgba(0, 145, 255, 0.11)" }}
          className="card"
          variant="outlined"
        >
          <CardContent sx={{ height: "100%" }}>
            <Stack sx={{ justifyContent: "space-between", height: "100%" }}>
              <Stepper activeStep={activeStep}>
                <Step>
                  <StepLabel>
                    <span className="stepLabel">Step 1</span>
                  </StepLabel>
                </Step>
                <Step>
                  <StepLabel className="stepLabel">
                    <span className="stepLabel">Step 2</span>
                  </StepLabel>
                </Step>
                <Step>
                  <StepLabel className="stepLabel">
                    <span className="stepLabel">Step 3</span>
                  </StepLabel>
                </Step>
              </Stepper>
              {renderContent()}
              <div className="formContent">
                <Button
                  variant="contained"
                  sx={{ width: "30%" }}
                  className="emailBox"
                  onClick={nextStep}
                >
                  Next
                </Button>
              </div>
            </Stack>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
