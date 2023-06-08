import { Box, Stack } from "@mui/material";
import Navbar from "../components/Navbar/Navbar";
import SideBar from "../components/Sidebar/SideBar";
import Feed from "../components/Feed/Feed";
import RightBar from "../components/Rightbar/RightBar";
import AddIcon from "../components/AddIcon";

function Home() {
  return (
    <Box>
      <Navbar />
      <Stack
        sx={{
          flexDirection: { xs: "column", lg: "row" },
        }}
      >
        <SideBar />
        <Feed />
        <RightBar />
      </Stack>
      <AddIcon />
    </Box>
  );
}

export default Home;
