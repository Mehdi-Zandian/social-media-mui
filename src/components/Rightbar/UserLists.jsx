import {
  Avatar,
  Box,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";

function UserLists() {
  return (
    <Box>
      <Typography
        variant="h6"
        color="grayText"
        sx={{ opacity: "0.8", mb: "5px" }}
      >
        Latest Chats
      </Typography>

      <List
        sx={{
          width: "100%",
          maxWidth: 360,
          bgcolor: "grayText",
          color: "white",
          borderRadius: "20px",
          boxShadow: "0 0 8px #555",
        }}
      >
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar
              alt="Chris Evans"
              src="https://i.insider.com/644956d7b81bcf00183730f1?width=700"
            />
          </ListItemAvatar>
          <ListItemText
            primary="Brunch this weekend?"
            secondary={
              <>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="white"
                  fontWeight="bold"
                >
                  To Mehdi Zandian
                </Typography>
                <Typography variant="subtitle1" component="span" color="#ccc">
                  {" — I'll be in your neighborhood doing errands this…"}
                </Typography>
              </>
            }
          />
        </ListItem>

        <Divider variant="inset" component="li" />

        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar
              alt="Sadie Sink"
              src="https://media.glamourmagazine.co.uk/photos/645a1da4956bd7a79f28a2ea/1:1/w_1280,h_1280,c_limit/SADIE%20090523.jpg"
            />
          </ListItemAvatar>
          <ListItemText
            primary="Summer BBQ"
            secondary={
              <>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="white"
                  fontWeight="bold"
                >
                  To Mehdi Zandian
                </Typography>
                <Typography variant="subtitle1" component="span" color="#ccc">
                  {" — Wish I could come, but I'm out of town this…"}
                </Typography>
              </>
            }
          />
        </ListItem>

        <Divider variant="inset" component="li" />

        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar
              alt="Brad Pitt"
              src="https://flxt.tmsimg.com/assets/1366_v9_bc.jpg"
            />
          </ListItemAvatar>
          <ListItemText
            primary="Let's Go On Vacation"
            secondary={
              <>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="white"
                  fontWeight="bold"
                >
                  To Mehdi Zandian
                </Typography>
                <Typography variant="subtitle1" component="span" color="#ccc">
                  {" — Do you have Paris suggestions? Have you ever…"}
                </Typography>
              </>
            }
          />
        </ListItem>
      </List>
    </Box>
  );
}

export default UserLists;
