import { Box, Typography, IconButton, Link } from "@mui/material";
import logo from "../res/assets/logo.png";
import "./App.css";
import Lottie from "react-lottie";
import universeAnimated from "../res/lottie/universe.json";
import InstagramIcon from "@mui/icons-material/Instagram";

function App() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: universeAnimated,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleInstaClick = () => {
    window.location.href='https://www.instagram.com/soul.divina/'
  };

  return (
    <Box className="App">
      <IconButton
        sx={{position: "absolute", right: '20px'}}
        size="large"
        edge="end"
        aria-label="instagram do Soul Divina"
        onClick={handleInstaClick}
        color="inherit"
      >
        <InstagramIcon />
      </IconButton>
      <div className="App-universe">
        <Lottie options={defaultOptions} height="88vmin" width="88vmin" />
      </div>
      <img src={logo} className="App-logo" alt="logo" />
      <Typography
        component="div"
        sx={{ textAlign: "center", fontSize: "4vmin" }}
        color="white"
      >
        Em construção...
      </Typography>
    </Box>
  );
}

export default App;
