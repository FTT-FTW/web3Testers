import { Button } from "@mui/material";
import "./Home.css";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Link } from "react-router-dom";
import { ReactComponent as Web } from "../../../assets/Web.svg";

export const Header = () => {
  const matches = useMediaQuery("(min-width:900px)");
  return (
    <div className="headerContainer">
      <Link to="/">
        <Web className="logoIcon" />
      </Link>
      {matches && (
        <Link to="/waitlist">
          <Button
            variant="outlined"
            sx={{
              textTransform: "unset",
              height: 50,
              width: 150,
            }}
            className="Button"
          >
            Join waitlist
          </Button>
        </Link>
      )}
    </div>
  );
};
