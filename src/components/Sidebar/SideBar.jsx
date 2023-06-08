import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";
import { data } from "../../data/SideBarData";
import DarkModeIcon from "@mui/icons-material/DarkMode";

function SideBar() {
  return (
    <Box
      flex="1"
      sx={{
        display: { xs: "none", lg: "block" },
        borderRight: "solid 1px rgba(0,0,0,0.1)",
      }}
    >
      <Box position="sticky" top={0} left={0}>
        <List>
          {data.map((item) => {
            return (
              <ListItem
                sx={{ borderBottom: "1px solid rgba(0,0,0,0.1)" }}
                key={crypto.randomUUID()}
                disablePadding
              >
                <ListItemButton sx={{ py: "20px" }}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.title} />
                </ListItemButton>
              </ListItem>
            );
          })}
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <DarkModeIcon />
              </ListItemIcon>
              <Switch />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}

export default SideBar;
