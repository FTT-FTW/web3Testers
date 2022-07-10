import { Button } from "@mui/material";
import "./Home.css";
import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";

export const Header = () => {
  const matches = useMediaQuery("(min-width:900px)");
  const navigate = useNavigate();
  const handleOnClick = useCallback(
    () => navigate("/waitlist", { replace: true }),
    [navigate]
  );
  return (
    <div className="headerContainer">
      <span className="testersTitle"> web3testers </span>
      {matches && (
        <Button
          variant="outlined"
          sx={{ textTransform: "unset", height: 50, width: 150 }}
          className="Button"
          onClick={handleOnClick}
        >
          Join waitlist
        </Button>
      )}
    </div>
  );
};
