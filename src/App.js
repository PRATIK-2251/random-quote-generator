import React, { useState, useEffect } from "react";
import axios from "axios";
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
    await axios("https://api.adviceslip.com/advice").then((res) => {
      console.log(res.data.slip.advice);
      setAdvice(res.data.slip.advice);
    });
  }
  return (
    <>
      <Container
        maxWidth={false}
        sx={{ backgroundColor: "#ffe082", minHeight: "90vh" }}
      >
        <Box sx={{ width: "100%", marginBottom: 3, mt: 3 }}>
          <Stack spacing={2} marginTop={5}>
            <Typography sx={{ textAlign: "center" }}>
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
          <Paper elevation={4} sx={{ display: "grid" }}>
            <Typography
              sx={{ textAlign: "center", marginY: 2, paddingX: "10px  " }}
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
