import { Button, Stack } from "@mui/material";
import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { CardList } from "./CardList";
import { Header } from "./Header";

function Home() {
  const navigate = useNavigate();
  const handleOnClick = useCallback(
    () => navigate("/waitlist", { replace: true }),
    [navigate]
  );

  return (
    <Stack className="container">
      <Header />
      <div className="contentBody">
        <span className="bodyText">
          GET PAID TO TRY <br /> WEB3 PRODUCTS
        </span>
        <Button
          variant="contained"
          sx={{
            marginTop: "16px",
            textTransform: "unset",
            width: 150,
            backgroundColor: "#349FFF",
          }}
          onClick={handleOnClick}
        >
          Join waitlist
        </Button>
      </div>
      <CardList />
    </Stack>
  );
}

export default Home;
