import React, { useState } from "react";
import { useFormik } from "formik";
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
  CardActionArea,
  Stepper,
  StepLabel,
  Step,
  Stack,
} from "@mui/material";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import "./formPage.css";
import { authentication } from "../../../FirebaseConfig";
import { TwitterAuthProvider, signInWithPopup } from "firebase/auth";
import { FormContent } from "./formContent";
import { ReactComponent as MetaMask } from "../../../assets/Metamask.svg";
import TwitterIcon from "@mui/icons-material/Twitter";
// const FormPage = () => {
//   const formik = useFormik({
//     initialValues: {},
//     onSubmit: () => {},
//   });

//   const paperstyle = {
//     padding: 20,
//     height: "70vh",
//     width: 350,
//     margin: "40px auto",
//   };

//   const connectWallet = () => {
//     console.log(window.ethereum);
//     if (window.ethereum && window.ethereum.isMetaMask) {
//       window.ethereum
//         .request({ method: "eth_requestAccounts" })
//         .then((result) => {
//           console.log(result);
//         })
//         .catch(() => {
//           console.log("Something went wrong");
//         });
//     } else {
//       console.log("Install MetaMask");
//     }
//   };

//   const signInTwitter = () => {
//     const provider = new TwitterAuthProvider();
//     signInWithPopup(authentication, provider)
//       .then((re) => {
//         console.log(re);
//       })
//       .catch(() => {
//         console.log("error");
//       });
//   };

//   return (
//     <Grid>
//       <Paper elevation={10} style={paperstyle}>
//         <div className="form-head">
//           <Typography className="waitlist" variant="h5">
//             Join Waitlist
//           </Typography>
//           <FactCheckIcon className="icon" color="primary" />
//         </div>

//         <Card className="wallet-card" onClick={connectWallet}>
//           <CardActionArea className="Wc-content">
//             <CardContent>
//               <Typography variant="h7">Connect your wallet</Typography>
//             </CardContent>
//             <DoneOutlineIcon className="tick" color="primary" />
//           </CardActionArea>
//         </Card>

//         <Card className="twitter-card" onClick={signInTwitter}>
//           <CardActionArea className="Tw-content">
//             <CardContent>
//               <Typography variant="h7">Connect your twitter</Typography>
//             </CardContent>
//             <DoubleArrowIcon className="arrow" color="primary" />
//           </CardActionArea>
//         </Card>

//         <div className="form-email">
//           <TextField
//             id="outlined-basic"
//             label="Email"
//             variant="outlined"
//             fullWidth
//           />
//         </div>

//         <div className="submit-button">
//           <Button variant="outlined" type="submit" fullWidth>
//             Submit
//           </Button>
//         </div>
//       </Paper>
//     </Grid>
//   );
// };

// export default FormPage;

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
      <span className="testersTitle"> web3testers </span>

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
