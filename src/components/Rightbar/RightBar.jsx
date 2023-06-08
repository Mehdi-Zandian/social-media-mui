import { Box } from "@mui/material";
import OnlineFriends from "./OnlineFriends";

function RightBar() {
  return (
    <Box flex="1" sx={{ p: "10px", borderLeft: "1px solid rgba(0,0,0,0.1)" }}>
      <Box position="sticky" top={0} left={0}>
        <OnlineFriends />
      </Box>
    </Box>
  );
}

export default RightBar;
