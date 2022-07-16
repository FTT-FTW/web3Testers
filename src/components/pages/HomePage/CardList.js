import { Stack, Card, Typography } from "@mui/material";
import "./Home.css";
import useMediaQuery from "@mui/material/useMediaQuery";
import { ReactComponent as MetaMask } from "../../../assets/Metamask.svg";
import { ReactComponent as Discord } from "../../../assets/Discord.svg";
import { ReactComponent as Circle } from "../../../assets/Circle.svg";
import { ReactComponent as Dollar } from "../../../assets/Dollar.svg";

export const CardList = () => {
  const matches = useMediaQuery("(min-width:900px)");

  return (
    <Stack
      sx={{ justifyContent: "center" }}
      direction={matches ? "row" : "column"}
      spacing={2}
    >
      <div>
        <Card
          className="cardContainer"
          sx={{
            minHeight: 220,
            minWidth: 295,
            backgroundColor: "rgba(216, 233, 253, 0.8)",
          }}
          variant="outlined"
        >
          <Typography
            fontWeight={500}
            fontSize={24}
            color="#003C6A"
            marginBottom={2}
            className="center"
          >
            Step 1
          </Typography>
          <div className="center">
            <Typography fontWeight={400} fontSize={18} color="#0A6FBC">
              Connect web3 wallet
            </Typography>
            <MetaMask className="metaMask" />
          </div>
        </Card>
      </div>
      <div>
        <Card
          className="cardContainer"
          sx={{
            minHeight: 220,
            minWidth: 295,
            backgroundColor: "rgba(216, 233, 253, 0.8)",
          }}
          variant="outlined"
        >
          <Typography
            fontWeight={500}
            fontSize={24}
            color="#003C6A"
            marginBottom={2}
            className="center"
          >
            Step 2
          </Typography>
          <div className="center">
            <Typography fontWeight={400} fontSize={18} color="#0A6FBC">
              Join the community
            </Typography>
            <Discord className="metaMask" />
          </div>
        </Card>
      </div>
      <div>
        <Card
          className="cardContainer"
          sx={{
            minHeight: 220,
            minWidth: 295,
            backgroundColor: "rgba(216, 233, 253, 0.8)",
          }}
          variant="outlined"
        >
          <Typography
            fontWeight={500}
            fontSize={24}
            color="#003C6A"
            marginBottom={2}
            className="center"
          >
            Step 3
          </Typography>
          <div className="center">
            <Typography fontWeight={400} fontSize={18} color="#0A6FBC">
              Test the platform
            </Typography>
            <Circle className="metaMask" />
          </div>
        </Card>
      </div>
      <div>
        <Card
          className="cardContainer mobileCardPadding"
          sx={{
            minHeight: 220,
            minWidth: 295,
            backgroundColor: "rgba(216, 233, 253, 0.8)",
          }}
          variant="outlined"
        >
          <Typography
            fontWeight={500}
            fontSize={24}
            color="#003C6A"
            marginBottom={2}
            className="center"
          >
            Step 4
          </Typography>
          <div className="center">
            <Typography fontWeight={400} fontSize={18} color="#0A6FBC">
              Get paid in crypto
            </Typography>
            <Dollar className="metaMask" />
          </div>
        </Card>
      </div>
    </Stack>
  );
};
