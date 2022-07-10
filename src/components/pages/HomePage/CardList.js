import { Stack, Card, CardContent, Box, Typography } from "@mui/material";
import "./Home.css";
import useMediaQuery from "@mui/material/useMediaQuery";

export const CardList = () => {
  const matches = useMediaQuery("(min-width:900px)");

  return (
    <Stack
      sx={{ justifyContent: "center" }}
      direction={matches ? "row" : "column"}
      spacing={2}
    >
      <item>
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
              Join platfom by connecting
            </Typography>
            <Typography fontWeight={400} fontSize={18} color="#0A6FBC">
              your wallet
            </Typography>
          </div>
        </Card>
      </item>
      <item>
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
              We allot Platforms to test by
            </Typography>
            <Typography fontWeight={400} fontSize={18} color="#0A6FBC">
              scanning your wallet history
            </Typography>
          </div>
        </Card>
      </item>
      <item>
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
              Test the platform and submit your
            </Typography>
            <Typography fontWeight={400} fontSize={18} color="#0A6FBC">
              testing reviews
            </Typography>
          </div>
        </Card>
      </item>
      <item>
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
              Get your reward token in your
            </Typography>
            <Typography fontWeight={400} fontSize={18} color="#0A6FBC">
              wallet
            </Typography>
          </div>
        </Card>
      </item>
    </Stack>
  );
};
