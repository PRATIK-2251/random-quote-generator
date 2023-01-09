import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "./nature.jpg";
import {
  Container,
  Box,
  Paper,
  Button,
  Stack,
  Typography,
} from "@mui/material";
const App = () => {
  const [advice, setAdvice] = useState("");
  useEffect(() => {
    giveAdvice();
  }, []);
  async function giveAdvice() {
    await axios("https://api.adviceslip.com/advice")
      .then((res) => {
        console.log(res.data.slip.advice);
        setAdvice(res.data.slip.advice);
      })
      .catch((error) => {
        alert(error);
      });
  }
  return (
    <>
      <Container
        maxWidth={"xl"}
        sx={{
          backgroundImage: `url(${Image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
        }}
      >
        <Box sx={{ width: "100%", marginBottom: 3, mt: 3 }}>
          <Stack spacing={2} marginTop={5}>
            <Typography
              sx={{
                textAlign: "center",
                color: "#fff",
                fontSize: "20px",
                marginTop: 5,
              }}
            >
              Random Quote Generator
            </Typography>
          </Stack>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            "& > :not(style)": {
              m: 1,
              width: "auto",
              height: 128,
              minWidth: "30rem",
            },
          }}
        >
          <Paper
            elevation={4}
            sx={{
              display: "grid",
              background: "rgba(255,255,255,0.1)",
              backdropFilter: "blur(5px)",
            }}
          >
            <Typography
              sx={{
                textAlign: "center",
                marginY: 2,
                paddingX: "10px  ",
                color: "#fff",
              }}
            >
              {advice}
            </Typography>
            <Stack sx={{ display: "flex", alignItems: "center" }}>
              <Button
                variant="contained"
                sx={{
                  width: "auto",
                  padding: 1,
                  paddingX: 1,
                }}
                onClick={() => giveAdvice()}
              >
                Give Me Advice
              </Button>
            </Stack>
          </Paper>
        </Box>
      </Container>
    </>
  );
};

export default App;
