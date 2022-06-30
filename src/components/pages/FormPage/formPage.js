import React from "react";
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
} from "@mui/material";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import "./formPage.css";
import { authentication } from "../../../FirebaseConfig";
import { TwitterAuthProvider, signInWithPopup } from "firebase/auth";

const FormPage = () => {
  const formik = useFormik({
    initialValues: {},
    onSubmit: () => {},
  });

  const paperstyle = {
    padding: 20,
    height: "70vh",
    width: 350,
    margin: "40px auto",
  };

  const connectWallet = () => {
    console.log(window.ethereum);
    if (window.ethereum && window.ethereum.isMetaMask) {
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((result) => {
          console.log(result);
        })
        .catch(() => {
          console.log("Something went wrong");
        });
    } else {
      console.log("Install MetaMask");
    }
  };

  const signInTwitter = () => {
    const provider = new TwitterAuthProvider();
    signInWithPopup(authentication, provider)
      .then((re) => {
        console.log(re);
      })
      .catch(() => {
        console.log("error");
      });
  };

  return (
    <Grid>
      <Paper elevation={10} style={paperstyle}>
        <div className="form-head">
          <Typography className="waitlist" variant="h5">
            Join Waitlist
          </Typography>
          <FactCheckIcon className="icon" color="primary" />
        </div>

        <Card className="wallet-card" onClick={connectWallet}>
          <CardActionArea className="Wc-content">
            <CardContent>
              <Typography variant="h7">Connect your wallet</Typography>
            </CardContent>
            <DoneOutlineIcon className="tick" color="primary" />
          </CardActionArea>
        </Card>

        <Card className="twitter-card" onClick={signInTwitter}>
          <CardActionArea className="Tw-content">
            <CardContent>
              <Typography variant="h7">Connect your twitter</Typography>
            </CardContent>
            <DoubleArrowIcon className="arrow" color="primary" />
          </CardActionArea>
        </Card>

        <div className="form-email">
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            fullWidth
          />
        </div>

        <div className="submit-button">
          <Button variant="outlined" type="submit" fullWidth>
            Submit
          </Button>
        </div>
      </Paper>
    </Grid>
  );
};

export default FormPage;
