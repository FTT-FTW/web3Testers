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
  Modal,
  Typography,
  Box,
} from "@mui/material";
import "./formPage.css";
import { FormContent } from "./formContent";
import { ReactComponent as MetaMask } from "../../../assets/Metamask.svg";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Link } from "react-router-dom";

export const FormPage = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [open, setOpen] = React.useState(false);
  const [butttonState, setButtonState] = useState(true);
  const handleClose = () => setOpen(false);
  function throwError() {
    setOpen(true);
  }

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "#302f2f",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const metaConnect = () => {
    // throwError();
  };
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
              onClick={metaConnect}
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

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            sx={{ color: "white" }}
            id="modal-modal-title"
            variant="h6"
            component="h2"
          >
            Something Went Wrong...
          </Typography>
        </Box>
      </Modal>
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
                  disabled={butttonState}
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
