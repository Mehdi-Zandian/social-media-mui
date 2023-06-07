import { Box, Stack } from "@mui/material";
import Navbar from "../components/Navbar/Navbar";
import SideBar from "../components/Sidebar/SideBar";

function Home() {
  return (
    <Box>
      <Navbar />
      <Stack>
        <SideBar />
        {/* Feed */}
        {/* RightBar */}
      </Stack>
    </Box>
  );
}

export default Home;
