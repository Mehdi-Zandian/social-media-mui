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
    <Box>
      <List>
        {data.map((item) => {
          return (
            <ListItem key={crypto.randomUUID()} disablePadding>
              <ListItemButton>
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
  );
}

export default SideBar;
