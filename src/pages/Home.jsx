import { Box, Stack } from "@mui/material";
import Navbar from "../components/Navbar/Navbar";
import SideBar from "../components/Sidebar/SideBar";
import Feed from "../components/Feed/Feed";
import RightBar from "../components/Rightbar/RightBar";

function Home() {
  return (
    <Box>
      <Navbar />
      <Stack direction="row">
        <SideBar />
        <Feed />
        <RightBar />
      </Stack>
    </Box>
  );
}

export default Home;
